import { redis } from "@/lib/redis";

const BASE_URL = process.env.BASE_URL;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface PokemonBrief {
  name: string;
  url: string;
}

export interface CleanPokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export const getSearchIndex = async () => {
  const CACHE_KEY = "pokemon:search-index";

  try {
    const cachedData = await redis.get(CACHE_KEY);
    if (cachedData) return cachedData;

    const response = await fetch(`${BASE_URL}/pokemon?limit=1025`);
    if (!response.ok) throw new Error("API Fetch failed");

    const data = await response.json();

    const index = data.results.map((p: any) => {
      const id = parseInt(p.url.split("/").filter(Boolean).pop()!);

      return {
        name: p.name,
        id: id,
      };
    });

    await redis.set(CACHE_KEY, index, { ex: 604800 }); // 7 days cache
    return index;
  } catch (error) {
    console.error("Search Index Error:", error);
    throw new Error("Failed to fetch search index", { cause: error });
  }
};

export const getNameAndUrl = async (page: number = 1, limit: number = 20) => {
  const offset = (page - 1) * limit;
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    throw new Error("Failed to fetch Pokémon names and URLs || ", { cause: e });
  }
};

export const getPokemonData = async (
  page: number = 1,
  limit: number = 20,
): Promise<CleanPokemon[]> => {
  const CACHE_KEY = `pokemon:page:${page}:limit:${limit}`;

  try {
    const cachedData = await redis.get<CleanPokemon[]>(CACHE_KEY);

    if (cachedData) {
      console.log("CACHE HIT: Fetching data from redis...");
      return cachedData;
    }

    console.log("CACHE MISS: Fetching from PokeAPI...");

    const pokemonUrlAndNames = await getNameAndUrl(page, limit);
    const urls: string[] = pokemonUrlAndNames.results.map(
      (result: PokemonBrief) => result.url,
    );

    const allPokemonData: CleanPokemon[] = [];

    for (const url of urls) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Fetch failed: ${response.status}`);
      }

      const data = await response.json();

      allPokemonData.push({
        id: data.id,
        name: data.forms[0].name,
        types: data.types.map((t: any) => t.type.name),
        image: data.sprites.other["official-artwork"].front_default,
      });

      await delay(50);
    }

    await redis.set(CACHE_KEY, JSON.stringify(allPokemonData), { ex: 3600 });

    return allPokemonData;
  } catch (e) {
    console.error("Fetch Error Detail:", e);
    throw new Error("Failed to fetch Pokemon data || ", { cause: e });
  }
};
