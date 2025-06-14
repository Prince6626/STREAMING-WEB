import Button from "./Button";

const ButtonList = () => {

    const list = [
  "All", 
  "Music", 
  "Live", 
  "Gaming", 
  "News", 
  "Movies", 
  "Sports", 
  "Comedy", 
  "Podcasts",  
  "Watched", 
  "Trailers", 
  "Technology", 
  "Education", 
  "Documentary",
];

    return(
        <div className="flex overflow-x-auto space-x-3 px-4 py-2 bg-white shadow-sm scrollbar-hide">
            {list.map((e)=>{return <Button key={e} name={e}/>})}
        </div>
    )
}

export default ButtonList;