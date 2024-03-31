import { useRef } from "react"
import "./Global.css"
import Chat from "./components/Chat/Chat"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

function App() {
  const menuRef = useRef(null);

  const scrollToView = () => {
    menuRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header menuRef={menuRef} />
      <Main />
      <Footer scrollToView={scrollToView} />
      <Chat />
    </>
  )
}

export default App
