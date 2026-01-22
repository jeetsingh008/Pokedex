const SkeletonCard = () => {
  return (
    <div className="card bg-gray-200 animate-pulse relative h-64 w-full rounded-2xl">
      <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-300 rounded-4xl border-4 border-gray-200" />

      <div className="h-full w-full p-5 flex flex-col justify-end space-y-4">
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-gray-300 rounded-md" />
          <div className="h-4 w-1/4 bg-gray-300 rounded-md" />
        </div>

        <div className="flex space-x-2">
          <div className="h-8 w-20 bg-gray-300 rounded-full" />
          <div className="h-8 w-20 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
