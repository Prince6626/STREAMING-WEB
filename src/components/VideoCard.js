const VideoCard = ({info}) => {
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      <img 
        className="w-full h-44 object-cover"
        alt="thumbnail" 
        src={thumbnails?.medium?.url} 
      />
      <div className="p-3">
        <h2 className="font-semibold text-md line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-sm text-gray-500">
          {statistics?.viewCount
            ? Number(statistics.viewCount).toLocaleString() + " views"
            : ""}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;