import React from "react";
import { PokeDataSet } from "../utils/pokeDataSetType";

type PokeFavProps = {
  fav: PokeDataSet[];
};

function PokeFav({ fav }: PokeFavProps) {
  return (
    <div className="bg-red-500">
      <ul>
        {fav?.map((pokemon, idx) => (
          <li key={idx}>{pokemon?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokeFav;
