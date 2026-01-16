import { TYPE_BG_MAP, TYPE_COLOR_MAP } from "@/utils/pokemon-helper";
import { Icons } from "@/constants/illustrations";
import { IconType } from "react-icons/lib";
import Image from "next/image";

type PokemonDetailsType = {
  name: string;
  id: number;
  types: string[];
  sprite: string;
  typeIcon: string;
};

const Card = ({
  PokemonDetails = {
    name: "Pikachu",
    id: 25,
    types: ["Fire", "Water"],
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    typeIcon: "Electric",
  },
}: {
  PokemonDetails: PokemonDetailsType;
}) => {
  return (
    <div
      className={`card ${TYPE_BG_MAP[PokemonDetails.types[0].toLowerCase()]}`}
    >
      {/* --Hardcoded for now-- */}
      <Image
        className="absolute z-10 top-0 right-1/2 transform -translate-y-1/2 translate-x-1/2"
        src={"/pokemon-img.png"}
        alt="Balbasur Sprite"
        width={160}
        height={160}
      />
      <div className="h-full w-full overflow-hidden flex flex-col justify-end">
        {/* Upper part - Sprite */}
        {/* Lower part - Details text */}
        <div className="space-y-4">
          <div className=" text-start">
            <h2 className="text-white">{PokemonDetails.name}</h2>
            <p className="text-white/80 font-medium">
              #{PokemonDetails.id.toString().padStart(3, "0")}
            </p>
          </div>

          <div className="space-x-2 w-full flex items-center">
            {PokemonDetails.types.map((type, index) => {
              const Icon = Icons[type.toLowerCase()];
              return (
                <span
                  key={index}
                  className={`type ${TYPE_COLOR_MAP[type.toLowerCase()]}`}
                >
                  <Icon />
                  {type}{" "}
                </span>
              );
            })}
          </div>
        </div>
        <Image
          src={"/pokemonCircle.svg"}
          alt="Pokemon Circle"
          height={200}
          width={200}
          className="absolute z-0 transform -translate-x-1/2 translate-y-1/2 opacity-[6%] rotate-100"
        />
      </div>
    </div>
  );
};

export default Card;
