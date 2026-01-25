"use client";
import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { BiCheck } from "react-icons/bi";

// Sub-component for the dropdown list
const Menu = ({
  isOpen,
  selectedItem,
  onSelect,
  items,
}: {
  isOpen: boolean;
  selectedItem: string;
  onSelect: (item: string) => void;
  items: string[];
}) => {
  return (
    <ul
      className={`absolute z-50 top-full left-0 w-full mt-2 border-2 transition-all ease-in-out flex flex-col items-start border-dark-gray/16 bg-white rounded-lg p-2 text-subtext-1 shadow-lg ${
        isOpen
          ? "max-h-64 py-2 opacity-100 visible"
          : "max-h-0 py-0 opacity-0 invisible"
      } overflow-hidden`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onSelect(item)}
          className={`w-full rounded-xl cursor-pointer py-2 px-3 flex items-center justify-between gap-1 transition-colors ${
            selectedItem === item
              ? "bg-dark-gray/16 text-dark-blue font-bold"
              : "hover:bg-gray-50"
          }`}
        >
          {item}
          {selectedItem === item && <BiCheck className="w-5 h-5" />}
        </li>
      ))}
    </ul>
  );
};

const BaseFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Lowest Number First");

  const MENU_ITEMS = [
    "Lowest Number First",
    "Highest Number First",
    "Alphabetically (A-Z)",
    "Alphabetically (Z-A)",
  ];

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false); // Close menu after selection
  };

  return (
    <div className="flex flex-col relative w-64">
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen((open) => !open)}
        className={`flex cursor-pointer transition-all ease-in-out items-center justify-between border-2 py-2 px-4 rounded-lg font-semibold ${
          isOpen
            ? "border-dark-blue ring-1 ring-dark-blue"
            : "border-dark-gray/16"
        }`}
      >
        <span className="text-subtext-1">{selectedItem}</span>
        <span className="text-dark-blue">
          {isOpen ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
        </span>
      </div>

      {/* The Menu with Absolute Positioning */}
      <Menu
        isOpen={isOpen}
        selectedItem={selectedItem}
        onSelect={handleSelect}
        items={MENU_ITEMS}
      />
    </div>
  );
};

export default BaseFilter;
