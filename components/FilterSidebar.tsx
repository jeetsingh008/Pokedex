"use client";
import { RxCross1 } from "react-icons/rx";
import { POKEMON_TYPES } from "@/constants/illustrations";
import Image from "next/image";
import { usePokedexStore } from "@/store/usePokedexStore"; // Import your store

const FilterSidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  // 1. Hook into the Zustand store
  const {
    selectedTypes,
    toggleType,
    activeHeight,
    setActiveHeight,
    activeWeight,
    setActiveWeight,
    resetFilters,
  } = usePokedexStore();

  const HEIGHT_OPTIONS = [
    { size: "small", icon: "/filter-icons/small-height.svg" },
    { size: "medium", icon: "/filter-icons/medium-height.svg" },
    { size: "large", icon: "/filter-icons/large-height.svg" },
  ];

  const WEIGHT_OPTIONS = [
    { id: "light", size: "size-2.5" },
    { id: "medium", size: "size-4" },
    { id: "heavy", size: "size-5" },
  ];

  return (
    <aside className="filter-sidebar fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50">
      <div className="flex flex-col gap-3 px-5 py-6 h-full">
        {/* Header */}
        <div className="w-full flex justify-between items-center pb-4">
          <span className="text-xl text-dark-gray font-bold">Filters</span>
          <RxCross1
            onClick={closeSidebar}
            className="size-5 cursor-pointer hover:text-red-500"
          />
        </div>

        <div className="h-px w-full bg-dark-gray/24"></div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-8">
          {/* Type Section */}
          <div className="flex flex-col gap-3">
            <span className="text-sm text-dark-gray/60 font-bold uppercase">
              Type
            </span>
            <div className="grid grid-cols-2 gap-3">
              {POKEMON_TYPES.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="size-5 accent-blue-600 rounded cursor-pointer"
                  />
                  <span
                    className={`text-sm font-medium transition-colors ${
                      selectedTypes.includes(type)
                        ? "text-blue-600 font-bold"
                        : "text-dark-gray/80"
                    }`}
                  >
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Height Section */}
          <div className="flex flex-col gap-3">
            <span className="text-sm text-dark-gray/60 font-bold uppercase">
              Height
            </span>
            <div className="flex items-center gap-4">
              {HEIGHT_OPTIONS.map((opt) => (
                <button
                  key={opt.size}
                  onClick={() => setActiveHeight(opt.size)}
                  className={`size-14 p-3 rounded-xl transition-all flex items-center justify-center ${
                    activeHeight === opt.size
                      ? "bg-blue-600 shadow-lg"
                      : "bg-dark-gray/12 hover:bg-dark-gray/20"
                  }`}
                >
                  <Image
                    src={opt.icon}
                    alt={opt.size}
                    height={40}
                    width={40}
                    className={`object-contain transition-all ${
                      activeHeight === opt.size
                        ? "brightness-0 invert"
                        : "grayscale brightness-0 opacity-40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Weight Section */}
          <div className="flex flex-col gap-3">
            <span className="text-sm text-dark-gray/60 font-bold uppercase">
              Weight
            </span>
            <div className="flex items-center gap-4">
              {WEIGHT_OPTIONS.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setActiveWeight(w.id)}
                  className={`size-14 flex justify-center items-center rounded-xl transition-all ${
                    activeWeight === w.id
                      ? "bg-blue-600 shadow-lg"
                      : "bg-dark-gray/12 hover:bg-dark-gray/20"
                  }`}
                >
                  <div
                    className={`${w.size} rounded-full transition-colors ${
                      activeWeight === w.id ? "bg-white" : "bg-dark-gray"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3 items-center justify-between mt-auto pt-4 border-t border-dark-gray/12">
          <button
            onClick={resetFilters}
            className="flex-1 py-3 rounded-xl border-2 border-dark-gray/12 font-bold text-dark-gray/60 hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={closeSidebar}
            className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
