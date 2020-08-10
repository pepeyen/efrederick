import React, {Component} from 'react';

//Components
import Wayfinder from './components/wayfinder/wayfinder'
import About from './pages/about/about'
import Competencies from './pages/competencies/competencies'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'

//Styles
import './App.scss';
import './footer/footer.scss'

//Language library
import {footer} from './language/lib/language-lib'

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: "en_us",
      pageText : footer.en_us
    };
  }
  updatePageLanguage = (targetLanguage) => {
    this.setState({
      pageText : footer[targetLanguage]
    })
  }
  __handleLanguage = (event) => {
    this.setState({pageLanguage: event.target.value})
    this.updatePageLanguage(event.target.value)
  };
  render() {
    return (
      <div className="App">
        <header>
          <Wayfinder pageLanguage={this.state.pageLanguage}/>
        </header>
        <main>
          <About pageLanguage={this.state.pageLanguage}/>
          <Competencies pageLanguage={this.state.pageLanguage}/>
          <Projects pageLanguage={this.state.pageLanguage}/>
          <Contact pageLanguage={this.state.pageLanguage}/>
        </main>
        <footer>
          <div className="footer">
            <div className="footer__text">
              <div className="footer__logo">
                <p>eFrederick</p>
              </div>
              <div className="footer__credits --spaced-from-top">
                {this.state.pageText[0]}
              </div>
              <div className="footer__social">
                <div className="footer__social-link --spaced-from-top">
                  <a 
                    className="footer__outside-link" 
                    href="https://www.linkedin.com/in/erick-frederick-c/" 
                    target="_blank" rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
                <div className="footer__social-link --spaced-from-top">
                  <a 
                    className="footer__outside-link" 
                    href="https://github.com/pepeyen" 
                    target="_blank" rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="footer__lang">
                <select 
                  value={this.state.pageLanguage} 
                  onChange={this.__handleLanguage} 
                  name="languages" 
                  id="languages-dropdown"
                  className="footer__lang-dropdown"
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