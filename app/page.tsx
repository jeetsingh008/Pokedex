import FilterSidebar from "@/components/FilterSidebar";
import Header from "@/components/Header";
import PaginationControls from "@/components/PaginationControls";
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
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  console.log(currentPage);

  return (
    <div className="container relative mx-auto px-4 py-10 min-h-screen w-full space-y-10">
      <Header />
      <main className="py-20">
        <Suspense fallback={<Skeletons />}>
          <PokemonList page={currentPage} />
        </Suspense>
        <PaginationControls currentPage={currentPage} />  
        <FilterSidebar />
      </main>
    </div>
  );
}
