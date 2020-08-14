import React from 'react';
import {useSelector} from 'react-redux';

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
  const pageLanguage = useSelector(state => state.pageLanguage)
  return (
    <div className="App">
      <header>
        <Wayfinder pageLanguage={pageLanguage}/>
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