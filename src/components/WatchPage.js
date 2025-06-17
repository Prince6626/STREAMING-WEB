import { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    }, []);

    return (
        <div className="flex flex-col w-full">
            {/* Top section: Video + LiveChat */}
            <div className="flex flex-col lg:flex-row w-full px-2">
                {/* Video Player */}
                <div className="w-full lg:w-[70%] p-2">
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                </div>

                {/* Live Chat */}
                <div className="w-full lg:w-[400px] p-2">
                <LiveChat />
                </div>
            </div>

            {/* Comments */}
            <div className="px-2">
                <CommentContainer />
            </div>
        </div>
  );
};

export default WatchPage;