import "./Footer.css"
import PropTypes from 'prop-types';

const Footer = ({ scrollToView }) => {
    return (
        <>
            <footer>
                <section className="container">
                    <a onClick={scrollToView}><img src="images/arrow-top-icon.png" alt="Voltar ao ínicio" /></a>
                    <div className="nav-links">
                        <img src="images/dealer-white-logo.png" />
                        <div className="social-media-itens">
                            <span>SIGA-NOS:</span>
                            <a href="https://www.instagram.com/autoforcebr/" target="_blank">
                                <img src="images/instagram-icon.png" />
                            </a>
                            <a href="https://www.linkedin.com/company/autoforcebrasil/?originalSubdomain=br" target="_blank">
                                <img src="images/linkedin-icon.png" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ/featured" target="_blank">
                                <img src="images/youtube-icon.png" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-description">
                        <p><span>Razão Social:</span>AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA</p>
                        <p><span>CNPJ:</span>22.588.947/0001-06</p>
                        <p><span>Endereço Matriz:</span>Av. Prudente de Morais, 3966, Lagoa Nova. Natal/RN – CEP 59056-200
                            <span><a href="https://maps.app.goo.gl/quW3JvPGchue2gD3A" target="_blank">Ver mapa<img
                                className="icone-mapa" src="images/link-icon.png" alt="Ver Mapa" /></a></span>
                        </p>
                    </div>
                    <div className="footer-copyright">
                        <img src="images/autoforce-white-logo.png" alt="AutoForce" />
                        <div className="copyright">
                            <p>© Copyright 2021 - AutoForce - Todos os direitos reservados</p>
                            <p>Confira a nossa <a
                                href="https://materiais.autoforce.com/politica-de-privacidade-autoforce">Politica de
                                privacidade.</a>
                            </p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

Footer.propTypes = {
    scrollToView: PropTypes.func.isRequired
};

export default Footer