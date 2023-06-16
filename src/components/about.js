const About = () => {
    return ( 
        <section className="section" id="about">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">О компании</h2>
                    <div className="section__text">
                        Инвестиционно-строительный холдинг, в активе которого 15 лет опыта в
                        реализации масштабных проектов по строительству жилой недвижимости,
                        объектов рекреационного, коммерческого и социального назначения.
                        «Олимп» – это комплекс предприятий, обеспечивающих полный цикл услуг
                        по проектированию, производству, продажам и маркетингу, управлению
                        жилой и коммерческой недвижимостью и транспорту.
                    </div>
                </div>
                <div className="card">
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={require('../images/about/1.jpg')} />
                            </div>
                            <div className="card__text">15 лет опыта строительства</div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={require('../images/about/2.jpg')} />
                            </div>
                            <div className="card__text">Квалифицированный персонал</div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={require('../images/about/3.jpg')} />
                            </div>
                            <div className="card__text">14 завершенных проектов</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;


