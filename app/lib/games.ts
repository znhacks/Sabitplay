export interface GameProject {
  id: string;
  title: string;
  category: "simulation" | "action" | "horror" | string;
  badge: string;
  status: string;
  tagline: string;
  description: string;
  coverImage: string;
  platforms: string[];
  tags: string[];
  link: string;
  accentColor: string;
  badgeColor: string;
  iconName?: "Shield" | "Skull" | "Ghost" | "HeartCrack" | "Activity" | "Moon" | "Gamepad2";
}

export const CURATED_GAMES_METADATA: Record<string, Partial<GameProject>> = {
  "lembur": {
    category: "horror",
    badge: "Psychological • Studio Horror",
    status: "Playable in Browser",
    tagline: "Survive the late-night studio overtime...",
    description: "Survive the late-night studio overtime while something watches from the windows. An atmospheric psychological experience exploring eerie quietness and late-night solitude.",
    platforms: ["HTML5 Web", "Mobile / Browser"],
    tags: ["Simulation", "Horror", "Psychological", "Retro"],
    accentColor: "from-amber-600/20 via-neutral-950/10 to-transparent",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Moon",
  },
  "bocah-fishing": {
    category: "simulation",
    badge: "Cozy Simulation",
    status: "Playable on Web & Windows",
    tagline: "Cast your line, relax, and see what bites!",
    description: "A cozy lake fishing adventure where everything is bait! Hook junk, rusty batteries, or your freshly caught fish back onto the line to lure massive catches. Features dynamic day-and-night cycles and an extensive fish almanac.",
    platforms: ["HTML5 Web", "Windows"],
    tags: ["Godot", "Cozy", "Fishing", "Simulation"],
    accentColor: "from-amber-500/20 via-cyan-500/10 to-transparent",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Gamepad2",
  },
  "still-her": {
    category: "horror",
    badge: "Psychological • Narrative",
    status: "Playable in Browser",
    tagline: "Can't live with her. Can't live without her.",
    description: "A cinematic psychological narrative survival and dialogue simulator exploring the claustrophobic boundaries between love, obsession, and toxic codependency inside a sealed bunker with your infected partner, Hana.",
    platforms: ["HTML5 Web", "Mobile / Browser"],
    tags: ["Psychological Horror", "Interactive Fiction", "Story Rich"],
    accentColor: "from-emerald-500/20 via-green-950/10 to-transparent",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconName: "HeartCrack",
  },
  "keepie": {
    category: "action",
    badge: "Arcade Sports",
    status: "Playable in Browser",
    tagline: "Keep the ball in the air!",
    description: "A fast-paced, addictive 2D football freestyle juggling challenge! Test your reflexes, calculate dynamic ball physics based on foot contact points, control the rhythm, and keep the streak alive.",
    platforms: ["HTML5 Web", "Mobile / Touch"],
    tags: ["Godot", "Arcade", "Football", "Physics"],
    accentColor: "from-sky-500/20 via-blue-950/10 to-transparent",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Activity",
  },
  "last-gate": {
    category: "action",
    badge: "Castle Defense",
    status: "Playable on Web & Mobile",
    tagline: "The kingdom's last line of defense rests in your hands!",
    description: "A fast-paced 4-lane reflex castle defense game where you deflect demon fireballs into explosive chain reactions, unleash powerful character ultimates with Felix & Mella, and shepherd fleeing civilians to safety.",
    platforms: ["HTML5 Web", "Mobile / Touch"],
    tags: ["Godot", "Action", "Arcade", "Castle Defense", "2D"],
    accentColor: "from-orange-500/20 via-amber-950/10 to-transparent",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    iconName: "Shield",
  },
  "rustbond": {
    category: "horror",
    badge: "Visual Novel • Horror",
    status: "Windows & Android APK",
    tagline: "Can you survive?",
    description: "A Psychological Horror Visual Novel where you're trapped in a ruined laboratory with Ashy, a mysterious yandere girl who claims to have spread a deadly plague. Survive deadly Q&A sessions, manipulate emotions, calm her anger, and uncover multiple endings.",
    platforms: ["Windows", "Android APK"],
    tags: ["Psychological Horror", "Visual Novel", "Yandere", "Dating Sim"],
    accentColor: "from-rose-500/20 via-red-900/10 to-transparent",
    badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    iconName: "Skull",
  },
  "finalnightmare": {
    category: "horror",
    badge: "Puzzle • Platformer",
    status: "Windows Download",
    tagline: "Is it even real....?",
    description: "An atmospheric 2D pixel-art horror puzzle platformer where you must navigate surreal and dangerous nightmare dimensions. Solve intricate environmental puzzles, overcome deadly hazards, and escape the nightmare.",
    platforms: ["Windows", "Unity"],
    tags: ["Unity", "Pixel Art", "Horror", "Puzzle", "Platformer"],
    accentColor: "from-purple-500/20 via-violet-950/10 to-transparent",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconName: "Ghost",
  },
};

export const FALLBACK_GAMES: GameProject[] = [
  {
    id: "lembur",
    title: "Lembur",
    category: "horror",
    badge: "Psychological • Studio Horror",
    status: "Playable in Browser",
    tagline: "Survive the late-night studio overtime...",
    description: "Survive the late-night studio overtime while something watches from the windows. An atmospheric psychological experience exploring eerie quietness and late-night solitude.",
    coverImage: "https://img.itch.zone/aW1nLzMxMDIxOTE1LnBuZw==/315x250%23c/sTv1hp.png",
    platforms: ["HTML5 Web", "Mobile / Browser"],
    tags: ["Simulation", "Horror", "Psychological", "Retro"],
    link: "https://sabitplay.itch.io/lembur",
    accentColor: "from-amber-600/20 via-neutral-950/10 to-transparent",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Moon",
  },
  {
    id: "bocah-fishing",
    title: "Bocah Fishing",
    category: "simulation",
    badge: "Cozy Simulation",
    status: "Playable on Web & Windows",
    tagline: "Cast your line, relax, and see what bites!",
    description: "A cozy lake fishing adventure where everything is bait! Hook junk, rusty batteries, or your freshly caught fish back onto the line to lure massive catches. Features dynamic day-and-night cycles and an extensive fish almanac.",
    coverImage: "https://img.itch.zone/aW1nLzMwMTQ2Mjc2LmpwZw==/original/rN5OkI.jpg",
    platforms: ["HTML5 Web", "Windows"],
    tags: ["Godot", "Cozy", "Fishing", "Simulation"],
    link: "https://sabitplay.itch.io/bocah-fishing",
    accentColor: "from-amber-500/20 via-cyan-500/10 to-transparent",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    iconName: "Gamepad2",
  },
  {
    id: "still-her",
    title: "Still Her?",
    category: "horror",
    badge: "Psychological • Narrative",
    status: "Playable in Browser",
    tagline: "Can't live with her. Can't live without her.",
    description: "A cinematic psychological narrative survival and dialogue simulator exploring the claustrophobic boundaries between love, obsession, and toxic codependency inside a sealed bunker with your infected partner, Hana.",
    coverImage: "https://img.itch.zone/aW1nLzMwNTMyMDY2LmpwZw==/original/HAkeLf.jpg",
    platforms: ["HTML5 Web", "Mobile / Browser"],
    tags: ["Psychological Horror", "Interactive Fiction", "Story Rich"],
    link: "https://sabitplay.itch.io/still-her",
    accentColor: "from-emerald-500/20 via-green-950/10 to-transparent",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    iconName: "HeartCrack",
  },
  {
    id: "keepie",
    title: "Keepie Uppie",
    category: "action",
    badge: "Arcade Sports",
    status: "Playable in Browser",
    tagline: "Keep the ball in the air!",
    description: "A fast-paced, addictive 2D football freestyle juggling challenge! Test your reflexes, calculate dynamic ball physics based on foot contact points, control the rhythm, and keep the streak alive.",
    coverImage: "https://img.itch.zone/aW1nLzMwNDI1MDI2LnBuZw==/original/75wgH6.png",
    platforms: ["HTML5 Web", "Mobile / Touch"],
    tags: ["Godot", "Arcade", "Football", "Physics"],
    link: "https://sabitplay.itch.io/keepie",
    accentColor: "from-sky-500/20 via-blue-950/10 to-transparent",
    badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    iconName: "Activity",
  },
  {
    id: "last-gate",
    title: "Last Gate",
    category: "action",
    badge: "Castle Defense",
    status: "Playable on Web & Mobile",
    tagline: "The kingdom's last line of defense rests in your hands!",
    description: "A fast-paced 4-lane reflex castle defense game where you deflect demon fireballs into explosive chain reactions, unleash powerful character ultimates with Felix & Mella, and shepherd fleeing civilians to safety.",
    coverImage: "https://img.itch.zone/aW1nLzMwNDA0NDM1LmpwZw==/original/hlYDAP.jpg",
    platforms: ["HTML5 Web", "Mobile / Touch"],
    tags: ["Godot", "Action", "Arcade", "Castle Defense", "2D"],
    link: "https://sabitplay.itch.io/last-gate",
    accentColor: "from-orange-500/20 via-amber-950/10 to-transparent",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    iconName: "Shield",
  },
  {
    id: "rustbond",
    title: "Rustbond",
    category: "horror",
    badge: "Visual Novel • Horror",
    status: "Windows & Android APK",
    tagline: "Can you survive?",
    description: "A Psychological Horror Visual Novel where you're trapped in a ruined laboratory with Ashy, a mysterious yandere girl who claims to have spread a deadly plague. Survive deadly Q&A sessions, manipulate emotions, calm her anger, and uncover multiple endings.",
    coverImage: "https://img.itch.zone/aW1nLzI5MzkxMzYwLmpwZw==/original/7qABb1.jpg",
    platforms: ["Windows", "Android APK"],
    tags: ["Psychological Horror", "Visual Novel", "Yandere", "Dating Sim"],
    link: "https://sabitplay.itch.io/rustbond",
    accentColor: "from-rose-500/20 via-red-900/10 to-transparent",
    badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    iconName: "Skull",
  },
  {
    id: "finalnightmare",
    title: "Final Nightmare",
    category: "horror",
    badge: "Puzzle • Platformer",
    status: "Windows Download",
    tagline: "Is it even real....?",
    description: "An atmospheric 2D pixel-art horror puzzle platformer where you must navigate surreal and dangerous nightmare dimensions. Solve intricate environmental puzzles, overcome deadly hazards, and escape the nightmare.",
    coverImage: "https://img.itch.zone/aW1nLzI0MjU3NjM5LnBuZw==/original/q3nazN.png",
    platforms: ["Windows", "Unity"],
    tags: ["Unity", "Pixel Art", "Horror", "Puzzle", "Platformer"],
    link: "https://sabitplay.itch.io/finalnightmare",
    accentColor: "from-purple-500/20 via-violet-950/10 to-transparent",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconName: "Ghost",
  },
];

function inferCategory(text: string, genre: string): "simulation" | "action" | "horror" {
  const combined = `${text} ${genre}`.toLowerCase();
  if (
    combined.includes("horror") ||
    combined.includes("psychological") ||
    combined.includes("yandere") ||
    combined.includes("nightmare") ||
    combined.includes("survive") ||
    combined.includes("ghost") ||
    combined.includes("scary")
  ) {
    return "horror";
  }
  if (
    combined.includes("sport") ||
    combined.includes("action") ||
    combined.includes("arcade") ||
    combined.includes("defense") ||
    combined.includes("combat") ||
    combined.includes("football")
  ) {
    return "action";
  }
  return "simulation";
}

async function fetchFromPublicProfile(): Promise<GameProject[]> {
  const res = await fetch("https://sabitplay.itch.io", {
    next: { revalidate: 3600 },
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch itch.io profile: ${res.statusText}`);
  }

  const html = await res.text();
  const parts = html.split(/<div[^>]*class="[^"]*\bgame_cell\b[^"]*"/);
  const gameParts = parts.slice(1);
  const parsedGames: GameProject[] = [];

  for (const part of gameParts) {
    const linkMatch =
      part.match(/class="[^"]*title game_link"[^>]*href="([^"]+)">([^<]+)<\/a>/) ||
      part.match(/<a[^>]*class="[^"]*title[^"]*"[^>]*href="([^"]+)">([^<]+)<\/a>/) ||
      part.match(/<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/);

    if (!linkMatch) continue;

    const url = linkMatch[1];
    const slug = url.split("/").filter(Boolean).pop() || "";
    const title = linkMatch[2].trim();

    const textMatch = part.match(/class="game_text"[^>]*>([^<]+)<\/div>/);
    const rawDesc = textMatch
      ? textMatch[1]
          .replace(/&#039;/g, "'")
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&")
          .trim()
      : "";

    const imgMatch = part.match(/data-lazy_src="([^"]+)"/) || part.match(/src="([^"]+)"/);
    const coverImage = imgMatch ? imgMatch[1] : "";

    const genreMatch = part.match(/class="game_genre">([^<]+)<\/div>/);
    const genre = genreMatch ? genreMatch[1].trim() : "";

    const isWeb = part.includes("web_flag") || part.includes("Play in browser");
    const isWindows = part.includes("icon-windows8") || part.includes("Windows");

    const platforms: string[] = [];
    if (isWeb) platforms.push("HTML5 Web");
    if (isWindows) platforms.push("Windows");
    if (platforms.length === 0) platforms.push("Playable on itch.io");

    const curated = CURATED_GAMES_METADATA[slug];

    const category = curated?.category || inferCategory(`${title} ${rawDesc}`, genre);
    const status = curated?.status || (isWeb ? "Playable in Browser" : "Download Available");
    const badge = curated?.badge || `${genre || "Indie Game"} • ${status}`;
    const tagline = curated?.tagline || rawDesc || "Explore on itch.io";
    const description = curated?.description || rawDesc || "Play now on itch.io";
    const finalCover = curated?.coverImage || coverImage;

    const tags = curated?.tags || [
      ...(genre ? [genre] : []),
      ...platforms,
      "itch.io",
    ];

    const accentColor =
      curated?.accentColor ||
      (category === "horror"
        ? "from-rose-500/20 via-red-950/10 to-transparent"
        : category === "action"
        ? "from-sky-500/20 via-blue-950/10 to-transparent"
        : "from-amber-500/20 via-orange-950/10 to-transparent");

    const badgeColor =
      curated?.badgeColor ||
      (category === "horror"
        ? "bg-rose-500/10 text-rose-300 border-rose-500/20"
        : category === "action"
        ? "bg-sky-500/10 text-sky-300 border-sky-500/20"
        : "bg-amber-500/10 text-amber-300 border-amber-500/20");

    const iconName =
      curated?.iconName ||
      (category === "horror" ? "Ghost" : category === "action" ? "Shield" : "Gamepad2");

    parsedGames.push({
      id: slug,
      title: curated?.title || title,
      category,
      badge,
      status,
      tagline,
      description,
      coverImage: finalCover,
      platforms: curated?.platforms || platforms,
      tags,
      link: url,
      accentColor,
      badgeColor,
      iconName,
    });
  }

  return parsedGames;
}

async function fetchFromOfficialApi(apiKey: string): Promise<GameProject[]> {
  const res = await fetch("https://api.itch.io/profile/games", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Itch API request failed: ${res.statusText}`);
  }

  interface ItchApiGame {
    id: number;
    title: string;
    url: string;
    cover_url?: string;
    short_text?: string;
    type?: string;
    p_windows?: boolean;
    p_android?: boolean;
    p_linux?: boolean;
    p_osx?: boolean;
  }

  const data = (await res.json()) as { games?: ItchApiGame[] };
  if (!data.games || !Array.isArray(data.games)) {
    throw new Error("Invalid response format from itch API");
  }

  return data.games.map((g) => {
    const slug = g.url.split("/").filter(Boolean).pop() || String(g.id);
    const curated = CURATED_GAMES_METADATA[slug];
    const isWeb = g.type === "html" || !g.p_windows;
    const isWindows = Boolean(g.p_windows);

    const platforms: string[] = [];
    if (isWeb) platforms.push("HTML5 Web");
    if (isWindows) platforms.push("Windows");
    if (g.p_android) platforms.push("Android");
    if (platforms.length === 0) platforms.push("Playable on itch.io");

    const category = curated?.category || inferCategory(`${g.title} ${g.short_text || ""}`, "");
    const status = curated?.status || (isWeb ? "Playable in Browser" : "Download Available");
    const badge = curated?.badge || `Indie Game • ${status}`;

    return {
      id: slug,
      title: curated?.title || g.title,
      category,
      badge,
      status,
      tagline: curated?.tagline || g.short_text || "Explore on itch.io",
      description: curated?.description || g.short_text || "Play now on itch.io",
      coverImage: curated?.coverImage || g.cover_url || "",
      platforms: curated?.platforms || platforms,
      tags: curated?.tags || [...platforms, "itch.io"],
      link: g.url,
      accentColor:
        curated?.accentColor ||
        (category === "horror"
          ? "from-rose-500/20 via-red-950/10 to-transparent"
          : category === "action"
          ? "from-sky-500/20 via-blue-950/10 to-transparent"
          : "from-amber-500/20 via-orange-950/10 to-transparent"),
      badgeColor:
        curated?.badgeColor ||
        (category === "horror"
          ? "bg-rose-500/10 text-rose-300 border-rose-500/20"
          : category === "action"
          ? "bg-sky-500/10 text-sky-300 border-sky-500/20"
          : "bg-amber-500/10 text-amber-300 border-amber-500/20"),
      iconName:
        curated?.iconName ||
        (category === "horror" ? "Ghost" : category === "action" ? "Shield" : "Gamepad2"),
    };
  });
}

export async function getGames(): Promise<{ games: GameProject[]; source: "api" | "profile" | "fallback" }> {
  const apiKey = process.env.ITCH_API_KEY;

  if (apiKey) {
    try {
      const games = await fetchFromOfficialApi(apiKey);
      if (games.length > 0) {
        return { games, source: "api" };
      }
    } catch (err) {
      console.warn("Itch.io official API failed, falling back to public profile:", err);
    }
  }

  try {
    const games = await fetchFromPublicProfile();
    if (games.length > 0) {
      return { games, source: "profile" };
    }
  } catch (err) {
    console.warn("Itch.io profile fetch failed, falling back to static list:", err);
  }

  return { games: FALLBACK_GAMES, source: "fallback" };
}
