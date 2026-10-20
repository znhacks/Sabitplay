import { NextResponse } from "next/server";
import { getGames } from "@/app/lib/games";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const { games, source } = await getGames();
    return NextResponse.json({
      success: true,
      count: games.length,
      source,
      lastUpdated: new Date().toISOString(),
      games,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
