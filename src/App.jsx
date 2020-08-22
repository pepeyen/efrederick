import React from 'react';

//Components
import Wayfinder from './components/Wayfinder'
import About from './views/About'
import Competencies from './views/Competencies'
import Projects from './views/Projects'
import Contact from './views/Contact'
import Footer from './components/Footer'

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