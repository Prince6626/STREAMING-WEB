import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResult } from "../utils/SearchSlice";

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggetion , setSuggetion] = useState([]);
    const [showSuggetion ,setShowSuggetion] = useState(false);

    const SearchCache = useSelector((store)=>store.search);

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    useEffect(()=>{
        const timer = setTimeout(() => {
            if (SearchCache[searchQuery]) {
                setSuggetion(SearchCache[searchQuery]);
            } else {
                getSearchSuggetions();
            }
        },200);

        return () => {
            clearTimeout(timer);
        }; 
    }, [searchQuery]);

    const getSearchSuggetions = async() => {
        //console.log(searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        // console.log(json[1]);
        setSuggetion(json[1]);

        dispatch(cacheResult({ [searchQuery]: json[1] }));
    }

return (
  <div className="bg-white shadow-md sticky top-0 z-50 px-4 py-2">
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <img
          onClick={()=>{toggleMenuHandler()}}
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        <a href="/" className="hidden sm:block">
          <img
            className="h-7"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpeUxySnVSlmNBQV_KikxqT8qFHbf-35_tKGNigl1rbA5JU4JQiXiJW-pVAyvCT01q9I&usqp=CAU"
          />
        </a>
      </div>
      <div className="hidden sm:flex flex-grow justify-center relative">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-1 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetion(true)}
            onBlur={() => setShowSuggetion(false)}
          />
          <button className="px-5 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
            🔍
          </button>
        </div>

        {showSuggetion && (
          <div className="absolute top-10 w-full max-w-xl bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <ul>
              {suggetion.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Search Bar */}
      <div className="flex-grow mx-2 sm:hidden relative">
        <div className="flex w-full">
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-1 rounded-l-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetion(true)}
            onBlur={() => setShowSuggetion(false)}
          />
          <button className="px-4 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
            🔍
          </button>
        </div>

        {showSuggetion && (
          <div className="absolute top-10 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <ul>
              {suggetion.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User Icon */}
      <img
        className="h-8 w-8 rounded-full hover:scale-105 transition-transform duration-200"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
    </div>
  </div>
);


}

export default Head;