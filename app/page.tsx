import Header from "@/components/Header";
import PokemonList from "@/components/PokemonList";
import SkeletonCard from "@/components/SkeletonCard";
import { Suspense } from "react";
const Skeletons = () => (
  <div className="h-full w-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-20 gap-x-6">
    {[...Array(12)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);
export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen w-full space-y-10">
      <Header />
      <main className="py-20">
        <Suspense fallback={<Skeletons />}>
          <PokemonList />
        </Suspense>
      </main>
    </div>
  );
}
