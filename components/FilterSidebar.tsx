"use client";
import { RxCross1 } from "react-icons/rx";
import { POKEMON_TYPES } from "@/constants/illustrations";
import Image from "next/image";
import { useState } from "react";
const FilterSidebar = () => {
  const FirstPart = POKEMON_TYPES.slice(0, 9);
  const SecondPart = POKEMON_TYPES.slice(9, 18);

  const HEIGHT_OPTIONS = [
    {
      size: "small",
      icon: "/filter-icons/small-height.svg",
    },
    {
      size: "medium",
      icon: "/filter-icons/medium-height.svg",
    },
    {
      size: "large",
      icon: "/filter-icons/large-height.svg",
    },
  ];

  const [activeHeight, setActiveHeight] = useState("");
  const [activeWeight, setActiveWeight] = useState("");
  return (
    <aside className="filter-sidebar">
      <div className="flex flex-col gap-3 px-3 sm:px-5 h-full">
        {/* Header */}
        <div className="w-full flex justify-between items-center pb-4">
          <span className="text-body-1 text-dark-gray font-semibold">
            Filters
          </span>
          <RxCross1 className=" size-5 " />
        </div>

        <div className="h-px w-full bg-dark-gray/24"></div>

        <div>
          {/* Content */}
          <div className="flex flex-col justify-center gap-5 font-medium">
            <div className="flex flex-col gap-2">
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

            {/* Height selector */}
            <div className="flex flex-col gap-2">
              <span className="w-full text-body-2 text-dark-gray/60 font-semibold">
                Height
              </span>
              <div className="flex items-center gap-5">
                {HEIGHT_OPTIONS.map((opt, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveHeight(opt.size)}
                    className={`size-12 p-2 rounded-md ${activeHeight === opt.size ? "bg-blue" : "bg-dark-gray/16"}  hover:bg-blue`}
                  >
                    <Image
                      src={opt.icon}
                      alt={opt.size}
                      height={48}
                      width={48}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Weight selectors */}
          <div className="flex flex-col gap-2">
            <span className="w-full text-body-2 text-dark-gray/60 font-semibold">
              Weight
            </span>
            <div className="flex items-center gap-5">
              <div
                onClick={() => setActiveWeight("light")}
                className={`size-12 flex justify-center hover:bg-blue items-center p-2 rounded-md ${activeWeight === "light" ? "bg-blue" : "bg-dark-gray/16"}`}
              >
                <div className={"size-2.5 bg-dark-gray rounded-full"}></div>
              </div>

              <div
                onClick={() => setActiveWeight("medium")}
                className={`size-12 flex justify-center hover:bg-blue items-center p-2 rounded-md ${activeWeight === "medium" ? "bg-blue" : "bg-dark-gray/16"}`}
              >
                <div className="size-4 bg-dark-gray rounded-full"></div>
              </div>

              <div
                onClick={() => setActiveWeight("heavy")}
                className={`size-12 flex justify-center hover:bg-blue items-center p-2 rounded-md ${activeWeight === "heavy" ? "bg-blue" : "bg-dark-gray/16"}`}
              >
                <div className="size-5 bg-dark-gray rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="flex gap-3 items-center justify-between mt-auto">
          <button className="btn-outline text-button">Reset filters</button>
          <button className="btn-primary text-button">Apply filters</button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
