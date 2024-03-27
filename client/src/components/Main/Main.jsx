import useScrollVisibility from "../../hooks/useScrollVisibility";
import "./Main.css";

const Main = () => {
    const { textRef, elementVisible } = useScrollVisibility();

    return (
        <>
            <main>
                <section>
                    <div className="info-page">
                        <div className="previous-page">
                            <span>Ofertas → <a href="#">Novo Série 1</a></span>
                            <a href="#">Voltar para página anterior</a>
                        </div>
                        <div className="title-page-car show">
                            <h1>BMW Série 4 Cabrio</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="car-info-section">
                        <div className="car-info-text">
                            <p>Descubra o BMW Série 4 Cabrio <br />
                                Cliente On-line tem Condições Especiais e aqui na Dealer BMW!
                            </p>
                            <p className="car-price">A partir de <span className="price-car-color">R$ 179.950</span></p>
                        </div>
                        <div className="car-info-content">
                            <img className="car-img-background" src="images/car-model.png" alt="BMW Série 4 Cabrio" />
                            <div className="car-info-highlights">
                                <h1>Destaques</h1>
                                <div className="highlights-itens">
                                    <div className="item">
                                        <img src="images/gas-pump-icon.png" alt="14,7 km/l Consumo" />
                                        <p className="item-text-highlights">Consumo <span>14,7 km/l</span></p>
                                    </div>
                                    <div className="item">
                                        <img src="images/fuel-icon.png" alt="999 cm3 Cilindrada" />
                                        <p className="item-text-highlights">Cilindrada <span>999 cm3</span></p>
                                    </div>
                                    <div className="item">
                                        <img src="images/power-icon.png" alt="75 cv Potência" />
                                        <p className="item-text-highlights">Potência <span>75 cv</span></p>
                                    </div>
                                    <div className="item">
                                        <img src="images/velocity-icon.png" alt="154 km/h Velocidade Máx." />
                                        <p className="item-text-highlights">Velocidade Máx.<span>154 km/h</span></p>
                                    </div>
                                </div>
                                <button className="button-contact button-call">TENHO INTERESSE</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={elementVisible ? "description text-animation" : "description"} ref={textRef}>
                        <h1>A vida é melhor<br />
                            quando compartilhada.<br />
                            BMW Série 4 Cabrio
                        </h1>
                        <p>
                            A performance irradia de cada ângulo do design inovador do BMW Série 4 Cabrio.
                            Começando pela dianteira, que conta com para-choque clássico dos modelos BMW.
                            Ao correr os olhos pelo design, nota-se imediatamente o teto inclinado e a linha do ombro marcante,
                            que
                            equilibra o centro de gravidade do carro.
                            Voltando-se para as laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21 polegadas que
                            chamam a
                            atenção.
                            Ao chegar na traseira do BMW Série 4 Cabrio, a força do design continua surpreendendo.
                            O para-choque com difusão clássica dos modelos BMW, as lâminas horizontais e teto com spoiler ganham
                            um toque
                            a mais de amplitude devido ao vidro traseiro levemente rebaixado.
                        </p>
                    </div>
                    <div className="description-video">
                        <h1>Conheça o BMW Série 4 Cabrio</h1>
                        <div className="container-video">
                            <iframe src="https://www.youtube-nocookie.com/embed/cFyrTEYyq64?controls=0"
                            ></iframe>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="legal-description">
                        <p>
                            <span className="strong">Texto Legal:</span>
                            Virtus 1.0, 4 portas (cód. BZ23B3), ano/modelo 18/18 à vista a partir de R$ 73490 ou financiado com
                            entrada de
                            R$ 44094 (60%) e mais 24 prestações mensais de R$ 1286.
                            Taxa de juros: 0% a.m. e 0% a.a. Total da operação: R$ 74958. CET máximo para esta operação: 04,75%%
                            a.a.
                            Condições válidas para financiamento pelo Banco Volkswagen.
                            Oferta válida exclusivamente para a cidade de Natal / RN, no período de 30/09/2018 a 31/10/2018 para
                            veículos
                            com pintura sólida.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main