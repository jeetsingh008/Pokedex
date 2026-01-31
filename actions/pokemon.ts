"use server";

import { getSearchIndex } from "@/service/pokemon";

export async function fetchPokemonIndex() {
  return await getSearchIndex();
}
