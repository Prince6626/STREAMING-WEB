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
            <div className="flex flex-col items-center sm:items-start w-full max-w-[400px] sm:ml-3 flex flex-col-reverse">
                <div className="w-full h-[300px] sm:h-[530px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll ">
                    {ChatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message}/>)}
                </div>
            </div>
            <form
                className="w-full mt-2 p-2 border border-black rounded-lg flex"
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
                    className="flex-1 py-2 px-2 border border-black rounded-lg text-sm"
                    placeholder="chat here "
                    type="text"
                    value={liveMessage}
                    onChange={
                        (e) => setLiveMessage(e.target.value)
                    }
                ></input>
                <button className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-green-100 border border-green-900 hover:bg-green-200">Send</button>
            </form>
        </>
    );
};

export default LiveChat;