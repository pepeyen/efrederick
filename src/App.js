import React from 'react';

//COMPONENTS
import Wayfinder from './comp/wayfinder/wayfinder'
import About from './pages/about/about'
import Competences from './pages/competences/competences'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'
//STYLES
import './App.scss';

function App() {
  let App = document.getElementsByClassName("about");
  let waypathsCoordinates = [
    App,
    "1",
    "2",
    "3"
  ]
  console.log(waypathsCoordinates[0])
  return (
    <div className="App">
      <header>
        <Wayfinder waypathsLocation = {waypathsCoordinates}/>
      </header>
      <main>
        <About />
        <Competences />
        <Projects />
        <Contact />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
