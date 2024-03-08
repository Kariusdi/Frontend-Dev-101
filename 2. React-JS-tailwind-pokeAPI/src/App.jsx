import { useState, useEffect } from 'react'
import './css/main.css'
import axios from 'axios'
import LikePoke from './components/like';
import InfoPoke from './components/info';
import ReactLoading from 'react-loading';

function App() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState(1);
  const [fav, setFav] = useState([]);

  useEffect(() => {

    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true)
        let respone = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
          signal: abortController.signal
        });

        setPoke(respone.data);
        setError("");

      } catch (error) {
        setError("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPoke();
    return () => abortController.abort();

  }, [id])

  console.log(poke);

  const NextPoke = () => {
    setId((id) => id + 1);
  }

  const PreviousPoke = () => {
    if(id != 1){
      setId((id) => id - 1);
    }
  }

  const AddPoke = () => {
    setFav((oldFav) => [...oldFav, poke]);
  }

  const RemovePoke = (index) => {
    const newFav = fav.filter((_, idx) => idx !== index);
    setFav(newFav);
  }

  console.log("Fav",fav);

  return (

    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div id='poke-status'>
        <InfoPoke poke={poke} id={id}/>

        {loading 
          ? <ReactLoading type="spinningBubbles" color="#fff" />
          : <img id='poke-pic' src={poke?.sprites?.other?.home?.front_default} alt="" />
        }
        
        <div id="selection">
          <button id="sel" onClick={PreviousPoke}>Prev Character</button>
          <button id='fav-button' onClick={AddPoke}>Add to Arena</button>
          <button id="sel" onClick={NextPoke}>Next Character</button>
        </div>
      </div>

      <div id='poke-fav'>
        <h2>Your Team Arena</h2>
        {fav.length < 1 
          ? <p>Team is empty</p>
          : <div className='grid overflow-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
              {fav.map((character, idx) => (
                  <div id='card' key={idx}>
                      <h1>{character.name}</h1>
                      <img src={character?.sprites?.other?.home?.front_default} alt="" />
                      <div id="action">
                        <LikePoke/>
                        <button id='del' onClick={() => RemovePoke(idx)}>Remove</button>
                      </div>
                  </div>
              ))}
            </div>
        }
      </div>
    </div>
  )
}

export default App
