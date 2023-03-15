// App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Documents from "./components/Documents";
import MyCal from "./components/MyCal";
import Qualifications from "./components/Qualifications";
import GTag from "./components/GTag";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Testimonials />*/}
      <Contact />
      {/* <Documents /> */}
      {/* <Qualifications /> */}
      <GTag />
      <MyCal />
      
    </main>
    
  );
}
