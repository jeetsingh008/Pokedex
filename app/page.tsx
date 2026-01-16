import Card from "@/components/Card";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen w-full space-y-10">
      <Header />
      <main className="py-20">
        <div className="h-full w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-18 gap-x-6">
          <Card
            PokemonDetails={{
              name: "Bulbasaur",
              id: 1,
              types: ["Fire", "Poison"],
              sprite:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
          />
          <Card
            PokemonDetails={{
              name: "Bulbasaur",
              id: 1,
              types: ["Poison", "Poison"],
              sprite:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
          />
          <Card
            PokemonDetails={{
              name: "Bulbasaur",
              id: 1,
              types: ["Fire", "Poison"],
              sprite:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
          />
          <Card
            PokemonDetails={{
              name: "Bulbasaur",
              id: 1,
              types: ["Grass", "Poison"],
              sprite:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
          />
          <Card
            PokemonDetails={{
              name: "Bulbasaur",
              id: 1,
              types: ["Grass", "Poison"],
              sprite:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
          />
          <Card
            PokemonDetails={{
              name: "Bulbasaur",
              id: 1,
              types: ["Electric", "Poison"],
              sprite:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
          />
        </div>
      </main>
    </div>
  );
}
