import "./Chat.css";
import { useState } from "react";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import useScrollToBottom from "../../hooks/useScrollToEnd";

const Chat = () => {
  const [popUp, setPopup] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useLocalStorage("messages", []);
  const scrollToEnd = useScrollToBottom(messages);

  const handleModal = () => {
    setPopup(!popUp);
  };

  const getMessages = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userMessage = {
      role: "user",
      content: prompt,
    };

    setMessages((prevState) => [...prevState, userMessage]);

    setPrompt("");

    try {
      const response = await axios.post("https://autoforce-website.onrender.com/chat", {
        prompt: [...messages, userMessage],
      });
      setMessages((prevState) => [
        ...prevState,
        {
          role: "assistant",
          content: response.data,
        },
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="popup-button" onClick={handleModal}>
        <img
          src={popUp ? "images/close-icon.png" : "images/popup-logo.png"}
          alt=""
          className={popUp ? "button-close" : "button-open"}
        />
      </button>
      <dialog open={popUp}>
        <div className="header-chat">
          <div className="image-user">
            <img src="images/autoforce-logo.png" alt="AutoForce Chat" />
          </div>
          <div className="username">
            <span>AutoForce</span>
          </div>
        </div>
        <div className="messages-chat">
          <ul>
            {messages.map((message, index) => (
              <li
                ref={scrollToEnd}
                className={`${message.role}-messages`}
                key={index}
              >
                {message.role === "assistant" ? <span>AutoForce</span> : null}

                <p>{message.content}</p>
              </li>
            ))}
            {loading ? (
              <li className="assistant-messages">
                <span>AutoForce</span>
                <p className="jumping-dots">
                  <span className="dot-1"></span>
                  <span className="dot-2"></span>
                  <span className="dot-3"></span>
                </p>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="send-message">
          <form action="submit">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Escreva uma mensagem"
            />
            <button onClick={getMessages} type="submit">
              <img src="images/send-gray-icon.png" alt="" />
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Chat;
