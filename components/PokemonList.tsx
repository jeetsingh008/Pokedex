import { getPokemonData } from "@/service/pokemon";
import Card from "./Card";

const PokemonList = async ({ page }: { page: number }) => {
  const pokemonData = await getPokemonData(page);
  return (
    <div>
      <div className="h-full w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-18 gap-x-6">
        {pokemonData.map((pokemon, index) => {
          return (
            <Card
              key={index}
              PokemonDetails={{
                name: pokemon.name,
                id: 1,
                types: pokemon.types,
                sprite: pokemon.image || "https://via.placeholder.com/150",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
