import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Navbar from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import { ProjectsPage } from './components/projectsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Project_infoPage } from './components/project_info';
import Image from './components/image';
import AboutCompanyPage from './components/aboutCompanyPage';


export function App() {
  return (
    <BrowserRouter>
    <div className="App">

        <main>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/image' element={<Image />} />
                <Route path='/project_info/:key' element={<Project_infoPage />} />
                <Route path='/aboutcompany' element={<AboutCompanyPage />} />
            </Routes>
        </main>

    </div>
    </BrowserRouter>
  );
}

