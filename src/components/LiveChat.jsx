import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generate } from "../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chat = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generate(), // generate random names
          message: "This is a live chat Api data",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="ml-2 w-full h-150 bg-slate-100 rounded-lg p-2 border border-black overflow-y-scroll scroll-auto flex flex-col-reverse ">
        <div>
          {chat.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Aditya",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2 ml-2 border border-black"
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-132 px-2"
          type="text"
        ></input>
        <button className="px-2 mx-2 bg-green-300 cursor-pointer">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
