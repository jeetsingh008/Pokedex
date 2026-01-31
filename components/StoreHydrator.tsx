"use client";
import { useEffect } from "react";
import { fetchPokemonIndex } from "@/actions/pokemon";
import { usePokedexStore } from "@/store/usePokedexStore";

const StoreHydrator = () => {
  const setMasterList = usePokedexStore((state) => state.setMasterList);
  const masterList = usePokedexStore((state) => state.masterList);

  useEffect(() => {
    const init = async () => {
      const index = await fetchPokemonIndex();
      setMasterList(index);
    };

    init();
  }, [setMasterList, masterList.length]);
  return null;
};

export default StoreHydrator;
