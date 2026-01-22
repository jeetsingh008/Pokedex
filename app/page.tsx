import Card from "@/components/Card";
import Header from "@/components/Header";
import { getPokemonData } from "@/service/pokemon";

export default async function Home() {
  const pokemonData = await getPokemonData();
  console.log(pokemonData);
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen w-full space-y-10">
      <Header />
      <main className="py-20">
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
      </main>
    </div>
  );
}
