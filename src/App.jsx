import React from 'react';

//Components
import Wayfinder from './components/wayfinder/wayfinder'
import About from './views/about/about'
import Competencies from './views/competencies/competencies'
import Projects from './views/projects/projects'
import Contact from './views/contact/contact'
import Footer from './components/footer/footer'

//Styles
import './App.scss';

function App(){ 
  return (
    <div className="App">
      <header>
        <Wayfinder />
      </header>
      <main>
        <About />
        <Competencies />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;