import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Button from "./Button";

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
    </div>
  );
};

export default Header;
