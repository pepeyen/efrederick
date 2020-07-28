import React, {Component} from 'react';

//Components
import Wayfinder from './comp/wayfinder/wayfinder'
import About from './pages/about/about'
import Competences from './pages/competences/competences'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'

//Styles
import './App.scss';
import './footer/footer.scss'

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: "en_us",
      pageText : this.languageLibrary.en_us
    };
    this.updatePageLanguage()
  }
  languageLibrary = {
    en_us: [
      "Made with love by me",
      "English",
      "Portuguese"
    ],
    pt_br: [
      "Feito com amor por mim",
      "Inglês",
      "Português"
    ]
  }
  updatePageLanguage = (targetLanguage) => {
    switch (targetLanguage) {
      case "en_us":
        this.setState({pageText : this.languageLibrary.en_us})
        break;

      case "pt_br":
        this.setState({pageText : this.languageLibrary.pt_br})
        break;
    
      default:
        break;
    };
  }
  __handleLanguage = (event) => {
    this.setState({pageLanguage: event.target.value})
    this.updatePageLanguage(event.target.value)
  };
  render() {
    return (
      <div className="App">
        <header>
          <Wayfinder/>
        </header>
        <main>
          <About pageLanguage = {this.state.pageLanguage}/>
          <Competences pageLanguage = {this.state.pageLanguage}/>
          <Projects pageLanguage = {this.state.pageLanguage}/>
          <Contact pageLanguage = {this.state.pageLanguage}/>
        </main>
        <footer>
          <div className = "footer">
            <div className = "footer__text">
              <div className = "footer__logo">
                eFrederick
              </div>
              <div className = "footer__credits --spaced-from-top">
                {this.state.pageText[0]}
              </div>
              <div className = "footer__social">
                <div className = "footer__social-link --spaced-from-top">
                  <a className = "footer__outside-link" href = "https://www.linkedin.com/in/erick-frederick-c/" target = "_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
                <div className = "footer__social-link --spaced-from-top">
                  <a className = "footer__outside-link" href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Github</a>
                </div>
              </div>
              <div className = "footer__lang">
                <select 
                  value={this.state.pageLanguage} 
                  onChange={this.__handleLanguage} 
                  name="languages" 
                  id="languages-dropdown"
                  className = "footer__lang-dropdown"
                >
                  <option value="en_us">{this.state.pageText[1]}</option>
                  <option value="pt_br">{this.state.pageText[2]}</option>
                </select>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
