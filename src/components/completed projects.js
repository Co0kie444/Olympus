const СompletedProjects = () => {
    return ( 
        <section className="section" id="works">
            <div className="container">
                <div className="section__header">
                <h2 className="section__title">Завершенные проекты</h2>
                <div className="section__text"></div>
                </div>
            </div>
            <div className="works">
                <div className="works__col">
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/1.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">Жилой дом на ул.Пушкина</div>
                            <div className="works__text" />
                        </div>
                    </div>
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/2.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">ЖК на пр.Победы</div>
                            <div className="works__text" />
                        </div>
                    </div>
                </div>
                <div className="works__col">
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/3.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">ЖК "Столичный"</div>
                            <div className="works__text" />
                        </div>
                    </div>
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/4.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">Жилой дом "Континент"</div>
                            <div className="works__text" />
                        </div>
                    </div>
                </div>
                <div className="works__col">
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/5.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">ЖК "Кипарис"</div>
                            <div className="works__text" />
                        </div>
                    </div>
                </div>
                <div className="works__col">
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/6.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">Жилой дом на ул.Крылова</div>
                            <div className="works__text" />
                        </div>
                    </div>
                    <div className="works__item">
                        <img
                        className="works__image"
                        src={require('../images/works/7.jpg')}
                        alt=""
                        />
                        <div className="works__info">
                            <div className="works__title">ЖК "Солнечный"</div>
                            <div className="works__text" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default СompletedProjects;