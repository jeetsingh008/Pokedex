import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full space-y-8">
      <div>
        <Image
          src={"/Pokedex-logo.png"}
          alt="Pokedex Logo"
          height={140}
          width={280}
          quality={100}
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
    </div>
  );
};

export default Header;
