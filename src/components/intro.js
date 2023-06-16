const Intro = () => {
    window.scroll(0, 0);
    return (
        <div className="intro" id="intro">
        <div className="container">
            <div className="intro__inner">
                <img src={require('../images/logo.png')} />
                <h1 className="intro__title">Олимп</h1>
                <h2 className="intro__suptitle">Строительная компания</h2>
            </div>
        </div>
        <div className="slider">
            <div className="container">
                <div className="slider__inner">
                    <div className="slider__item active">
                        <span className="slider__num">01</span>О компании
                    </div>
                    <div className="slider__item">
                        <span className="slider__num">02</span>
                            Руководство
                    </div>
                    <div className="slider__item">
                        <span className="slider__num">03</span>
                        Проекты
                    </div>
                    <div className="slider__item">
                        <span className="slider__num">04</span>
                        Контакты
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Intro;