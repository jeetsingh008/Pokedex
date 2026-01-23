import Link from "next/link";

export default function PaginationControls({
  currentPage,
}: {
  currentPage: number;
}) {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <Link
        href={`?page=${currentPage - 1}`}
        className={`px-4 py-2 bg-dark-blue text-white rounded ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""}`}
      >
        Previous
      </Link>
      <div className="p-2 border border-y-dark-gray border-x-transparent">
        <span className="font-medium text-dark-blue/90">
          Page {currentPage}
        </span>
      </div>

      <Link
        href={`?page=${currentPage + 1}`}
        className="px-4 py-2 bg-dark-blue text-white rounded"
      >
        Next
      </Link>
    </div>
  );
}
