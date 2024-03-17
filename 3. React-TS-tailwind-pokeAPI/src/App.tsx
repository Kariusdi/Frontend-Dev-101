import "./App.css";
import Nav from "./nav/nav";
import PokeStatus from "./components/pokeStatus";
import PokeFav from "./components/pokeFav";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokeDataSet } from "./utils/pokeDataSetType";

function App() {
  const [pokeData, setPokeData] = useState<PokeDataSet | null>(null);
  const [id, setId] = useState(1);
  const [error, setError] = useState("");
  const [fav, setFav] = useState<PokeDataSet[]>([]);

  const NextPokemon = () => {
    setId((id) => id + 1);
  };

  const PrevPokemon = () => {
    setId((id) => id - 1);
  };

  const FavPokemon = () => {
    if (pokeData) {
      setFav((oldFav) => [...oldFav, pokeData]);
    }
  };

  useEffect(() => {
    let abortController = new AbortController();

    const getData = async () => {
      try {
        const respone = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
          {
            signal: abortController.signal,
          }
        );
        console.log(respone.data);
        setPokeData(respone.data);
      } catch (error) {
        setError(`Something went wrong ${error}`);
      } finally {
        console.log("Done");
      }
    };

    getData();
    return () => abortController.abort();
  }, [id]);
  return (
    <>
      <Nav />
      <div className="grid sm:grid-cols-1 md:grid-cols-[repeat(2,1fr)]">
        <PokeStatus
          pokeData={pokeData}
          NextPokemon={NextPokemon}
          PrevPokemon={PrevPokemon}
          FavPokemon={FavPokemon}
        />
        <PokeFav fav={fav}/>
      </div>
    </>
  );
}

export default App;
