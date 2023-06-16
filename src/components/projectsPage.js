import React, { useState } from "react";
import Projects from './projects';
import Navbar from "./header";
import Footer from "./footer";


export function ProjectsPage() {
    window.scroll(0, 0);
    return (
        <div className="123">
            <Navbar />
            <Projects />
            <Footer />
        </div>
    );
}


