import { RxCross1 } from "react-icons/rx";
import { POKEMON_TYPES } from "@/constants/illustrations";
const FilterSidebar = () => {
  const FirstPart = POKEMON_TYPES.slice(0, 9);
  const SecondPart = POKEMON_TYPES.slice(9, 18);
  return (
    <aside className="filter-sidebar">
      <div className="space-y-3 px-3 sm:px-5">
        {/* Header */}
        <div className="w-full flex justify-between items-center pb-4">
          <span className="text-body-1 text-dark-gray font-semibold">
            Filters
          </span>
          <RxCross1 className=" size-5 " />
        </div>

        <div className="h-px w-full bg-dark-gray/24"></div>
        {/* Content */}
        <div className="flex flex-col justify-center gap-3 font-medium">
          <span className="w-full text-body-2 text-dark-gray/60 font-semibold">
            Type
          </span>
          <div className="flex justify-between">
            {/* Left Column */}
            <div className="flex flex-col gap-2 justify-between">
              {FirstPart.map((type, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={type}
                    value={type}
                    className="custom-checkbox"
                    aria-label={type}
                  />
                  <span>{type}</span>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="flex">
              {/* Left Column */}
              <div className="flex flex-col gap-2 justify-center">
                {SecondPart.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name={type}
                      value={type}
                      className="custom-checkbox"
                      aria-label={type}
                    />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div></div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
