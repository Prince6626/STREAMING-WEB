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
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex  flex-wrap justify-start   gap-2 p-4 px-[20px] md:[40px]  ">
        {list.map((e) => (
          <button
            key={e}
            className="flex-shrink-0 text-sm bg-gray-200 hover:bg-gray-300 font-semibold px-5 py-2 rounded-lg transition min-w-[2%] sm:min-w-fit text-center snap-start"
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};


export default ButtonList;