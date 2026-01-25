import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";
import { IoFilterOutline } from "react-icons/io5";
import BaseFilter from "./BaseFilter";

const Header = () => {
  return (
    <div className="w-full space-y-8">
      <div className="w-56">
        <Image
          src={"/Pokedex-logo.png"}
          alt="Pokedex Logo"
          height={140}
          width={280}
          priority={true}
          quality={100}
          className="object-contain w-full h-auto"
        />
      </div>
      {/* Search Input */}
      <div className="search-input-wrapper relative">
        <IoSearchOutline className="absolute h-5 w-5 top-1/2 left-3 -translate-y-1/2 text-dark-blue" />
        <input
          type="text"
          className="search-input"
          placeholder="Pokemon name, number or type"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <Button text="Search" variant="Secondary" />
        </div>
      </div>
      {/* Sidebar trigger */}
      <div className="w-full flex justify-between items-center px-2">
        {/* Base filter */}
        <BaseFilter />
        {/* Main Filter Trigger */}
        <button className="border-2 border-dark-gray/16 flex items-center gap-2 py-2 px-4 hover:border-dark-gray/40 transition-colors ease-in-out rounded-full">
          {" "}
          <IoFilterOutline /> <span className="">Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
