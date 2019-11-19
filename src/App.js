import React from "react"

import MyMenu from "./components/MyMenu"
import Donate from "./components/Donate"
import About from "./components/About"
import Careers from "./components/Careers"
import Educations from "./components/Educations"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Shop from "./components/Shop"
import Info from "./components/Info"
import Foot from "./components/Foot"
import Sidebar from "./components/Sidebar"

import "./App.css"


function App() {
    return (
        <div>
            <MyMenu />
            <Donate />
            <About />
            <Careers />
            <Educations />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
            <Shop />  
            <Info />
            <Foot />
            <Sidebar />
        </div>
    )
}

export default App;