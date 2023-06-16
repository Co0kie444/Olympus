import React from 'react';
import About from "./about";
import Intro from "./intro";
import Statistic from "./statistic";
import Team from "./team";
import СompletedProjects from "./completed projects";
import Projects from "./projects";
import Navbar from './header';
import Footer from './footer';


function Main() {
	return ( 
		<div className="page">
		<Navbar />
		<Intro />
		<About />
		<Statistic />
		<Team />
		<СompletedProjects />
		<Projects />
		<Footer />
		</div>
	 );
}
 
export default Main;