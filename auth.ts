import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

async function assignDiscordRole(userId: string, accessToken: string) {
  const guildId = process.env.DISCORD_GUILD_ID;
  const roleId = process.env.DISCORD_MEMBER_ROLE_ID;
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!guildId || !roleId || !botToken) return;

  // Step 1: Add user to the Discord server (requires guilds.join scope)
  await fetch(`https://discord.com/api/v10/guilds/${guildId}/members/${userId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bot ${botToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ access_token: accessToken }),
  });

  // Step 2: Assign the member role
  await fetch(
    `https://discord.com/api/v10/guilds/${guildId}/members/${userId}/roles/${roleId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bot ${botToken}`,
      },
    }
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          // guilds.join allows the app to add the user to the server
          scope: "identify guilds.join",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account }) {
      // account is only available on first sign-in
      if (account?.provider === "discord" && account.access_token) {
        token.discordId = account.providerAccountId;
        // Assign role every time user logs in
        await assignDiscordRole(account.providerAccountId, account.access_token);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.sub as string;
        if (token.picture) {
          session.user.image = token.picture as string;
        }
      }
      return session;
    },
  },
});
