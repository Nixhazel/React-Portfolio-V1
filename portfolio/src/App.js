import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials/>
      </main>
    </>
  );
}

export default App;
