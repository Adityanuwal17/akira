import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { useEffect, useState } from "react";
import { YT_SEARCH_API } from "../../utils/constants";
import { addToCache } from "../../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.search.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
        return;
      }
      getSearchSuggestions();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key - i
   * - render the component
   * - useEffect()
   * - start timeer => make api call after 200 ms
   *
   * key - iph
   * - destroy the component => useEffect return will be call and previous timer will be clear
   * - re-render the component
   * - useEffect()
   * - start new timer => make an api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(addToCache({ query: searchQuery, results: json[1] }));
  };

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-2xl bg-black text-white">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuhandler}
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/9451/9451364.png"
        ></img>
        <a href="/">
          <img
            className="h-18 -my-4 mx-2"
            alt="youtube-logo"
            src="https://images.unsplash.com/photo-1762340274205-06b6e0147640?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-15">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full p-2 text-white"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-gray-400 px-5 py-2 bg-gray-600 rounded-r-full">
            🔍
          </button>
        </div>
        {suggestions.length && showSuggestions ? (
          <div className="absolute border border-gray-500 bg-black py-2 px-5 w-160 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="p-1 shadow-sm hover:bg-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10 "
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/16785/16785804.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
