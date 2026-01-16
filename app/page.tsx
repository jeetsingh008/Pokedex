import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen w-full">
      <div className="h-full w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
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
  );
}
