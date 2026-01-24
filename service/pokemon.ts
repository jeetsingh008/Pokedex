import { redis } from "@/lib/redis";
const BASE_URL = process.env.BASE_URL;
interface PokemonBrief {
  name: string;
  url: string;
}

export const getNameAndUrl = async (page: number = 1, limit: number = 20) => {
  const offset = (page - 1) * limit;
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error("HTTP error! status: ", { cause: response.status });
    }
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error("Failed to fetch Pokémon names and URLs || ", { cause: e });
  }
};

export const getPokemonData = async (page: number = 1, limit: number = 20) => {
  const CACHE_KEY = `pokemon:page:${page}:limit:${limit}`;

  try {
    const cachedData = await redis.get(CACHE_KEY);

    if (cachedData) {
      console.log("CACHE HIT: Fetching data from redis...");
      return cachedData;
    }
    console.log("CACHE MISS: Fetching from PokeAPI...");

    const pokemonUrlAndNames = await getNameAndUrl(page, limit);
    const urls: string[] = pokemonUrlAndNames.results.map(
      (result: PokemonBrief) => {
        const url = result.url;
        if (!url) {
          throw new Error("No URL found for Pokémon: " + result.name);
        }
        return url;
      },
    );
    const dataPromises = urls.map(async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP error! status: ", { cause: response.status });
      }

      const data = await response.json();
      return {
        id: data.id,
        name: data.forms[0].name,
        types: data.types.map((t: any) => t.type.name),
        image: data.sprites.other["official-artwork"].front_default,
      };
    });
    const allPokemonData = await Promise.all(dataPromises);

    await redis.set(CACHE_KEY, JSON.stringify(allPokemonData), { ex: 3600 });
    return allPokemonData;
  } catch (e) {
    throw new Error("Failed to fetch Pokemon data || ", { cause: e });
  }
};
