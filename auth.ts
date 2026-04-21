import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

async function assignDiscordRole(userId: string, accessToken: string, username: string) {
  const guildId = process.env.DISCORD_GUILD_ID;
  const roleId = process.env.DISCORD_MEMBER_ROLE_ID;
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const logChannelId = process.env.DISCORD_LOG_CHANNEL_ID;

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

  // Step 3: Send log message to #maxrankbot channel
  if (logChannelId) {
    const now = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    await fetch(`https://discord.com/api/v10/channels/${logChannelId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bot ${botToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            color: 0x6ee800,
            title: "✅ Rolle vergeben",
            description: `<@${userId}> (**${username}**) hat sich auf **MaxRank.GG** eingeloggt und wurde dem Server hinzugefügt.`,
            fields: [
              { name: "User ID", value: userId, inline: true },
              { name: "Zeitpunkt", value: now, inline: true },
            ],
            footer: { text: "MaxRank.GG · Coaching Portal" },
          },
        ],
      }),
    });
  }
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
    async jwt({ token, account, profile }) {
      // account is only available on first sign-in
      if (account?.provider === "discord" && account.access_token) {
        token.discordId = account.providerAccountId;
        const username = (profile as { username?: string })?.username ?? token.name ?? "Unbekannt";
        // Assign role every time user logs in
        await assignDiscordRole(account.providerAccountId, account.access_token, username);
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
