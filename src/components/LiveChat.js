import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import store from "../utils/store";
import { generateRandomName } from "../utils/helper";
import { getRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: getRandomMessage(15),
            }))
        },2000);
        
        return() => clearInterval(i);
    },[]);

    return(
        <>
            <div className="w-[400px]  h-[530px] m-3 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    {ChatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message}/>)}
                </div>
            </div>
            <form
                className="w-[400px] rounded-lg mt-1 p-2 ml-3 border border-black flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name: "PS",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <input
                    className="ml-3 py-2 px-1 w-[320px] border border-black rounded-lg"
                    placeholder="chat here "
                    type="text"
                    value={liveMessage}
                    onChange={
                        (e) => setLiveMessage(e.target.value)
                    }
                ></input>
                <button className="px-2 mx-2 py-1 rounded-lg font-bold ml-3 border border-green-900 bg-green-100 hover:bg-green-200 ">Send</button>
            </form>
        </>
    );
};

export default LiveChat;