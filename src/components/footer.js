import { faTwitter, faVk, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return ( 
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__col  footer__col--first">
                        <div className="footer__logo">Олимп</div>
                        <div className="footer__text">
                            Вся представленная на сайте информация носит ознакомительный характер и не является публичной офертой в соответствии со ст. 437 Гражданского Кодекса Российской Федерации.
                        </div>
                    </div>
                    <div className="footer__col  footer__col--second">
                        <div className="footer__title">Социальные сети</div>
                        <div className="footer__socials">
                            <div className="footer__social__item">
                                <a href="https://web.telegram.org/a/" target="_blank" className="footer__icon">
                                <FontAwesomeIcon icon={faTelegram} />
                                </a>
                            </div>
                            <div className="footer__social__item">
                                <a href="https://vk.com/" target="_blank" className="footer__icon">
                                <FontAwesomeIcon icon={faVk} />
                                </a>
                            </div>
                            <div className="footer__social__item">
                                <a href="https://www.youtube.com/" target="_blank" className="footer__icon">
                                <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <div className="footer__social__item">
                                <a href="https://twitter.com" target="_blank" className="footer__icon">
                                <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__col  footer__col--third">
                        <div className="footer__social">
                            <div className="footer__title">
                                <b>150k</b> followers
                            </div>
                            <div className="footer__social-content">Follow Us:</div>
                        </div>
                        <form className="subscribe" action="/">
                            <input
                                className="subscribe__input"
                                type="email"
                                name="name"
                                placeholder="Your Email..."
                            />
                            <button className="subscribe__btn" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="copyright">
                  <span /> __________
                </div>
              </div>
        </footer>
        
          
     );
}
 
export default Footer;