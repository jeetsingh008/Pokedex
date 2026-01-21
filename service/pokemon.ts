const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getNameUrls = async () => {
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
