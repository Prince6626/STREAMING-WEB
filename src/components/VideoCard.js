const VideoCard = ({info}) => {
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white w-[92vw] sm:w-full max-w-full">
      <img 
        className="w-full h-36 sm:h-44 object-cover"
        alt="thumbnail" 
        src={thumbnails?.medium?.url} 
      />
      <div className="p-2">
        <h2 className="font-medium text-sm line-clamp-2 leading-snug">{title}</h2>
        <p className="text-xs text-gray-600 mt-1 truncate">{channelTitle}</p>
        <p className="text-xs text-gray-500">
          {statistics?.viewCount
            ? Number(statistics.viewCount).toLocaleString() + " views"
            : ""}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;