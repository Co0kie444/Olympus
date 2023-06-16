import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faVk, faInstagram} from '@fortawesome/free-brands-svg-icons';
import '../css/style.css';
import Navbar from './header';
import Footer from './footer';


const AboutCompanyPage = () => {
    window.scroll(0,0);

    return (
        <div className='123'>
            <Navbar />
            <section className="section">

                <div className="container">
                    <div className="intro__inner">
                        <img src={require('../images/logo.png')} style={{paddingTop: "150px"}}/>
                        <h1 className="intro__title">Олимп</h1>
                        <h2 className="intro__suptitle">Строительная компания</h2>
                    </div>


                    <section className="section" id="about__complex">
                    <div className="container">
                        <div className="complex_about">
                        <div className="complex_des">
                            <h2 className="section__title">Надежность</h2>
                            <div className="section__text" style={{fontSize:'22px'}}>
                                СК Олимп присвоен рейтинговым агентством акра кредитный рейтинг на уровне A-(ru) со стабильным прогнозом, что подтверждает высокую степень надежности компании
                            </div>
                        </div>
                        <div className="section__image">
                            <img src={require("../images/about/4.jpg")} />
                        </div>
                        </div>
                    </div>
                    </section>

                    <section className="section" id="about__complex">
                    <div className="container">
                        <div className="complex_about">
                        <div className="complex_des">
                            <h2 className="section__title">Строим с 2008 года</h2>
                            <div className="section__text" style={{fontSize:'22px'}}>
                                Вертикально интегрированная структура гк позволяет в короткие сроки своими силами проектировать и строить объекты любого уровня сложности
                            </div>
                        </div>
                        <div className="section__image">
                            <img src={require("../images/about/5.jpg")} />
                        </div>
                        </div>
                    </div>
                    </section>

                    <section className="section" id="about__complex">
                    <div className="container">
                        <div className="complex_about">
                        <div className="complex_des">
                            <h2 className="section__title">Объекты СК Олимп представлены не только в Симферополе</h2>
                            <div className="section__text" style={{fontSize:'22px'}}>
                                Объекты СК Олимп расположены в Симферополе и Симферопольской области, а также Алуште, Ялте и Евпатории. В 2022 году компания объявила о покупке земельных участков в Севастополе.
                            </div>
                        </div>
                        <div className="section__image">
                            <img src={require("../images/about/6.jpg")} />
                        </div>
                        </div>
                    </div>
                    </section>


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
                        <div className="card__name">Владислав Гончарев</div>
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
                        <div className="card__name">Михаил Воронцов</div>
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
                        <div className="card__name">Владимир Никольский</div>
                        <div className="card_prof">Коммерческий директор</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                        <div className="card__img">
                            <img src={require('../images/team/4.jpg')} alt="" />
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
                        <div className="card__name">АЛЕКСЕЙ АЛМАЗОВ</div>
                        <div className="card_prof" >Управляющий партнер сегмента Симферопольская область</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                        <div className="card__img">
                            <img src={require('../images/team/5.jpg')} alt="" />
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
                        <div className="card__name">ДМИТРИЙ ТРУБНИКОВ</div>
                        <div className="card_prof" >Управляющий партнер по сегменту "Симферополь"</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                        <div className="card__img">
                            <img src={require('../images/team/6.jpg')} alt="" />
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
                        <div className="card__name">ВЛАДИМИР ВОРОНИН</div>
                        <div className="card_prof" >Вице-президент. Строительно-производственный блок</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                        <div className="card__img">
                            <img src={require('../images/team/7.jpg')} alt="" />
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
                        <div className="card__name">НИКОЛАЙ ЗАМЫЦКИЙ</div>
                        <div className="card_prof" >Вице-президент по IT и цифровой трансформации</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                        <div className="card__img">
                            <img src={require('../images/team/8.jpg')} alt="" />
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
                        <div className="card__name">АЛЕКСАНДР ТКАЧЕНКО</div>
                        <div className="card_prof" >Директор департамента закупок СК Олимп</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                        <div className="card__img">
                            <img src={require('../images/team/9.jpg')} alt="" />
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
                        <div className="card__name">ЮЛИЯ ИТАЕВА</div>
                        <div className="card_prof" >Вице-президент по стратегии и управлению персоналом</div>
                        </div>
                    </div>

                    </div>
                </div>
                
            </section>


                </div>

            </section>
            <Footer />
        </div>
    )
        
}

export default AboutCompanyPage;
