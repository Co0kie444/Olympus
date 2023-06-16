import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faVk, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Team = () => {
    return ( 
        <section className="section" id="team">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">Руководство компании</h2>
                    <div className="section__text"></div>
                </div>

                <div className="card">
                <div className="card__item">
                    <div className="card__inner">
                    <div className="card__img">
                        <img src={require('../images/team/1.jpg')} alt="" />
                    </div>
                    <div className="card__text">
                        <div className="social">
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="card__info">
                    <div className="card__name">Гончарев Владислав</div>
                    <div className="card_prof">Основатель и президент CК Олимп</div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__inner">
                    <div className="card__img">
                        <img src={require('../images/team/2.jpg')} alt="" />
                    </div>
                    <div className="card__text">
                        <div className="social">
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="card__info">
                    <div className="card__name">Воронцов Михаил</div>
                    <div className="card_prof">Исполнительный директор</div>
                    </div>
                </div>
                <div className="card__item">
                    <div className="card__inner">
                    <div className="card__img">
                        <img src={require('../images/team/3.jpg')} alt="" />
                    </div>
                    <div className="card__text">
                        <div className="social">
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                        <a className="social__item" href="/#" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="card__info">
                    <div className="card__name">Никольский Владимир</div>
                    <div className="card_prof">Коммерческий директор</div>
                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}
 
export default Team;