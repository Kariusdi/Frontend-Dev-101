import axios from "axios";
import { useEffect, useState } from "react";
import { PokeDataSet } from "../utils/pokeDataSetType";

type PokeStatusProps = {
  pokeData: PokeDataSet | null;
  NextPokemon: () => void;
  PrevPokemon: () => void;
  FavPokemon: () => void;
};

function PokeStatus({
  pokeData,
  NextPokemon,
  PrevPokemon,
  FavPokemon,
}: PokeStatusProps) {
  return (
    <div className="bg-blue-500">
      <div>
        <p>{pokeData?.name}</p>
        <ul>
          {pokeData?.abilities.map((pokemon, idx) => (
            <li key={idx}>{pokemon?.ability?.name}</li>
          ))}
        </ul>
        <img src={pokeData?.sprites?.other?.home?.front_default} />
        <button onClick={PrevPokemon} className="pr-5">
          Prev Pokemon
        </button>
        <button onClick={NextPokemon} className="pl-5">
          Next Pokemon
        </button>
        <button onClick={FavPokemon} className="pl-5">
          Add to fav
        </button>
      </div>
    </div>
  );
}

export default PokeStatus;
