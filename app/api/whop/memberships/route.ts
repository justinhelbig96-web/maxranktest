import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const discordId = req.nextUrl.searchParams.get("discordId");
  const apiKey = process.env.WHOP_API_KEY;

  if (!apiKey || !discordId) {
    return NextResponse.json({ memberships: [] });
  }

  try {
    const res = await fetch(
      `https://api.whop.com/api/v2/memberships?status=active&discord_account_id=${discordId}&per=20`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("[Whop] Memberships fetch failed:", res.status, await res.text());
      return NextResponse.json({ memberships: [] });
    }

    const data = await res.json();
    const memberships = (data.data ?? []).map((m: { product?: { name?: string }; status?: string }) => ({
      planName: m.product?.name ?? "Unbekanntes Paket",
      status: m.status ?? "active",
    }));

    return NextResponse.json({ memberships });
  } catch (err) {
    console.error("[Whop] Error:", err);
    return NextResponse.json({ memberships: [] });
  }
}
