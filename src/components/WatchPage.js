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

    return(
        <div className="flex flex-col w-full">
            <div className="px-2 flex w-full">
                <div className="p-3">
                    <iframe
                        className="rounded-lg"
                        width="950"
                        height="525"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div w-full>
                    <LiveChat/>
                </div>
            </div>
            <div>
                <CommentContainer />
            </div>
        </div>
    );
};

export default WatchPage;