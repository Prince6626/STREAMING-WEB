import { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async() => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    };

    return(
        <div className="px-2 sm:px-4 py-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {videos.map((video) => (
                    <Link key={video?.id} to={"/watch?v="+video.id}>
                        <VideoCard info={video} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default VideoContainer;