import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
     
    </div>
  );
}

export default App;
