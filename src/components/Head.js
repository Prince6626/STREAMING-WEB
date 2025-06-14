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

    return(
        <div className="grid grid-cols-12 items-center p-4 shadow-md bg-white sticky top-0 z-50">
            <div className="flex items-center col-span-2 gap-3">
                <img 
                    onClick={()=>{toggleMenuHandler()}}
                    className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform duration-200"
                    alt="menu" 
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
                />
                <a href="/">
                    <img
                        className="h-8 rounded-md"
                        alt="logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpeUxySnVSlmNBQV_KikxqT8qFHbf-35_tKGNigl1rbA5JU4JQiXiJW-pVAyvCT01q9I&usqp=CAU"
                    />
                </a>
            </div>
            <div className="col-span-8 relative">
                <div className="flex w-full max-w-2xl mx-auto">
                    <input 
                        className="w-full border border-gray-400 p-2 pl-4 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-400 shadow-sm"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onFocus={()=>setShowSuggetion(true)}
                        onBlur={()=>setShowSuggetion(false)}
                    />
                    <button className="bg-gray-100 border border-gray-300 px-5 rounded-r-full hover:bg-gray-200 transition">🔍</button>
                </div>
                {showSuggetion && (
                    <div className="absolute bg-white mt-1 w-9/12 ml-[6rem] mr-40 rounded-lg shadow-lg border border-gray-200 z-10">
                        <ul>
                        {suggetion.map((s) => (
                            <li key={s} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                            🔍 {s}
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-2 flex justify-end pr-4">
                <img
                    className="h-8 w-8 rounded-full hover:scale-105 transition-transform duration-200"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>
        </div>
    )
}

export default Head;