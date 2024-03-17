import { createContext, useContext, useState } from "react";
import { AtSignIcon, Heart, Search, ThumbsUp } from "lucide-react";

type SearchContext = {
  isSearchShow: boolean;
};
const searchShowContext = createContext<SearchContext>({ isSearchShow: false });

function Nav() {
  const [isSearchShow, setSearchShow] = useState(false);

  return (
    <div className="flex h-10 gap-10 lg:gap-40 px-2 py-1 justify-between items-center bg-secondary-dark text-secondary">
      <searchShowContext.Provider value={{ isSearchShow }}>
        <Logo />
        <SearchBar />
        <div className="flex flex-shrink-0 gap-2">
          <button
            onClick={() => setSearchShow((e) => !e)}
            className="md:hidden"
          >
            <Search></Search>
          </button>
          <button>
            <Heart></Heart>
          </button>
          <button>
            <ThumbsUp></ThumbsUp>
          </button>
          <button>
            <AtSignIcon></AtSignIcon>
          </button>
        </div>
      </searchShowContext.Provider>
    </div>
  );
}

export default Nav;

function Logo() {
  const { isSearchShow } = useContext(searchShowContext);
  return (
    <div
      className={`gap-5 flex-shrink-0 items-center ${
        isSearchShow ? "hidden" : "flex"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png"
        className="w-20"
      />
      <div className="font-bold">Pokemon API</div>
    </div>
  );
}

function SearchBar() {
  const { isSearchShow } = useContext(searchShowContext);
  return (
    <form
      className={`md:flex justify-center flex-grow max-w-[600px] items-center gap-5 ${
        isSearchShow ? "sm:flex" : "hidden"
      }`}
    >
      <input
        type="search"
        placeholder="Search"
        className="px-3 py-1 rounded-full w-full text-md focus:border-blue-500 outline-none"
      />
      <button className={`${isSearchShow ? "hidden" : "visible"}`}>
        <Search />
      </button>
    </form>
  );
}
