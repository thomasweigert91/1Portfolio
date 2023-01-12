import React from 'react';
import Header from "./container/Header/Header.jsx";
import Footer from "./container/Footer/Footer.jsx";
import About from "./container/About/About.jsx";
import Skills from "./container/Skills/Skills.jsx";
import Work from "./container/Work/Work.jsx";
import Testimonial from "./container/Testimonials/Testimonial.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import "./App.scss"


const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />

    </div>
  )
}

export default App;