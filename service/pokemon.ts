const BASE_URL = process.env.BASE_URL;
interface PokemonBrief {
  name: string;
  url: string;
}

export const getNameAndUrl = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=100&offset=0`);
    if (!response.ok) {
      throw new Error("HTTP error! status: ", { cause: response.status });
    }
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error("Failed to fetch Pokémon names and URLs || ", { cause: e });
  }
};

export const getPokemonData = async () => {
  try {
    const pokemonUrlAndNames = await getNameAndUrl();
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
    return allPokemonData;
  } catch (e) {
    throw new Error("Failed to fetch Pokemon data || ", { cause: e });
  }
};
