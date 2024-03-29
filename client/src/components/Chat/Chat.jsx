import "./Chat.css";
import { useState } from "react";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import useScrollToBottom from "../../hooks/useScrollToEnd";

const Chat = () => {
    const [popUp, setPopup] = useState(false);
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useLocalStorage("messages", []);
    const scrollToEnd = useScrollToBottom([messages])

    const handleModal = () => {
        setPopup(!popUp);
    }

    const getMessages = async (e) => {
        e.preventDefault();

        const userMessage = {
            role: "user",
            content: prompt
        }

        setMessages(prevState => (
            [...prevState, userMessage]
        ))

        setPrompt("");

        try {
            const response = await axios.post("http://localhost:3000/chat", {
                "prompt": prompt
            });
            setMessages(prevState => (
                [...prevState,
                {
                    role: "bot",
                    content: response.data
                }
                ]
            ))

        } catch (err) {
            console.log(err)
        } finally {
            console.log("foi")
        }
    }

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
                            <li className={`${message.role}-messages`} key={index}>
                                {message.role === "bot" ?
                                    <span>AutoForce</span>
                                    : null}

                                <p>{message.content}</p>
                            </li>
                        ))}
                        <div ref={scrollToEnd} />
                    </ul>
                </div>
                <div className="send-message">
                    <form action="submit">
                        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Escreva uma mensagem" />
                        <button onClick={getMessages} type="submit"><img src="images/send-gray-icon.png" alt="" /></button>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Chat