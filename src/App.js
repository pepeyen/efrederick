import React from 'react';

//COMPONENTS
import Wayfinder from './comp/wayfinder/wayfinder'
import About from './pages/about/about'
import Competences from './pages/competences/competences'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'
import Footer from './comp/footer/footer'
//STYLES
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Wayfinder/>
      </header>
      <main>
        <About />
        <Competences />
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
