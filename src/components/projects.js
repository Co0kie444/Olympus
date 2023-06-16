import '../css/style.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const  Projects = () => {
    const [count, setCount]  = useState(5);
    const navigate = useNavigate();

    function showmore() {
        setCount(count + 4);

        if (count > 12)
        var element = document.getElementById('showmore-button');
        element.classList.add('hidden');
    }

    const projects = [
        {
            image:'../images/project/1.jpg',
            title:'Жилой квартал «Гагаринский»',
            text:'11 квартир',
            price:'3 599 000',
            id:'1'
        },

        {image:'../images/project/2.jpg',title:'Жилой квартал «Центральный»',text:'28 квартир',price:'4 299 997',id:'2'},
        {image:'../images/project/3.jpg',title:'Жилой квартал «Таврический»',text:'15 квартир',price:'3 999 999',id:'3'},
        {image:'../images/project/4.jpg',title:'Жилой дом «Достояние»',text:'6 квартир',price:'6 735 000',id:'4'},
        {image:'../images/project/5.jpg',title:'Семейный квартал «Континент»',text:'43 квартиры',price:'4 541 000',id:'5'},
        {image:'../images/project/6.jpg',title:'Жилой комплекс «Столичный»',text:'20 квартир',price:'5 250 000',id:'6'},
        {image:'../images/project/7.jpg',title:'Жилой дом «Ривьера»',text:'35 квартир',price:'8 500 000',id:'7'},
        {image:'../images/project/8.jpg',title:'Жилой комплекс «Жемчужина»',text:'56 квартир',price:'4 799 000',id:'8'},
        {image:'../images/project/9.jpg',title:'Жилой квартал «Звезда»',text:'25 квартир',price:'3 750 000',id:'9'},
        {image:'../images/project/10.jpg',title:'Жилой квартал «Университетский»',text:'65 квартир',price:'5 249 999',id:'10'}
    ]

    const ProjectView = projects.map((item) => {     
        if (item.id < count)
        
        return (
             
            <div className="projects__col">
            	<a className="projects__inner" key={item.id}>
	            	<div className="projects__item" onClick={() => navigate('/project_info/' + item.id)}>
	                    <img className="projects__item-img" src={require("../images/project/"+ item.id +".jpg")} />
	                    <div className="projects__item-content">
	                        <div className="project__title">{item.title}</div>
	                        <div className="project__text"><h1>{item.text}</h1>
	                        	<h2>от {item.price} ₽</h2>
	                        </div>
	                    </div>
	                </div>
	            </a>
            </div>
        )
    })
    
    return (
        <section className="section">
        <div className="container">
            <div className="section__header">

                <h2 className="section__title"> </h2>
                <div className="section__text">
                    
                </div>
            </div>

        <div id="showmore-list">
            <div className="projects">
                {ProjectView} 
            </div>
        </div>
            <div className="showmore-bottom" id="showmore-button">
				<a className="btn"   onClick={showmore}>Показать еще</a>               
			</div>

        </div>	
    </section>
    )

}
 
export default Projects;