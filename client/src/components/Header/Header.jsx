import "./Header.css";
const Header = () => {
    return (
        <>
            <header className="primary-header">
                <nav id="menu">
                    <div className="icons-logo">
                        <img src="images/dealer-black-logo.png" alt="Logo Dealer" />
                        <img src="images/line-black.png" className="line" />
                        <img src="images/bmw-logo.png" alt="Logo BMW" />
                    </div>
                    <div className="contact">
                        <button className="button-contact button-call">
                            <img src="images/phone-icon.png" alt="Ligar" />
                            <a href="tel:21999999999">
                                <span>LIGUE AGORA</span>
                            </a>
                        </button>
                        <button className="button-contact button-whatsapp" id="whatsapp">
                            <img src="images/whatsapp-icon.png"
                                alt="Iniciar uma conversa pelo whatsapp" /><a
                                    href="https://api.whatsapp.com/send?phone=551199999999"
                                    target="_blank">
                                <span>WHATSAPP</span>
                            </a>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header