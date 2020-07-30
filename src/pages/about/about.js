import React, {Component} from 'react';

//Styles
import './about.scss'
import '../pages.scss'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : this.languageLibrary.en_us
    }; 
  }
  languageLibrary = {
    en_us: [
      "About",
      "Hi, my name's Erick Frederick...",
      "i'm a devloper you can trust",
      "...who is available 24/7/365",
      "View My Work",
      "Contact Me"
    ],
    pt_br: [
      "Sobre",
      "Olá meu nome é Erick Frederick...",
      "sou um desenvolvedor muito confiável",
      "...que sempre estará disponível",
      "Veja Meu Trabalho",
      "Entre em contato"
    ]
  }; 
  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.updatePageLanguage()
    }
  };
  updatePageLanguage = () => {
    switch (this.props.pageLanguage) {
      case "en_us":
        this.setState({pageText : this.languageLibrary.en_us})
        break;

      case "pt_br":
        this.setState({pageText : this.languageLibrary.pt_br})
        break;
    
      default:
        break;
    }
  };
  //Function that calcultes the current height of a given element inside the page
  getElementPosition = (elementId) => {
    let element = document.getElementById(elementId)
    let wayfinderCurrentHeight
    if(document.documentElement.clientWidth >= 784){
      wayfinderCurrentHeight = (((Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 15.5))) / 100
    } else wayfinderCurrentHeight = 25.5 * 16

    let waydirectCoordinate = ((element.offsetTop - element.scrollTop) - wayfinderCurrentHeight);

    return waydirectCoordinate
  };
  wayfinderRoute = (targetedWaydirect) => {
    window.scrollTo({
      top: this.getElementPosition(targetedWaydirect),
      left: 0,
      behavior: 'smooth'
    });
  };
  render() {
    return (
      <div id="about" className = "article">
        <div className="article__title">{this.state.pageText[0]}</div>
        <div className = "article__box  --about-image">
          <div className = "article__text">
            <div className = "article__about">
              <div className = "article__about-headline">
                <div className = "article__about-headline-comment --start">
                  <p>{this.state.pageText[1]}</p>
                </div>
                <p>{this.state.pageText[2]}</p>
                <div className = "article__about-headline-comment --end">
                  <p>{this.state.pageText[3]}</p>
                </div>
              </div>        
            </div>
            <div className = "article__about-route">
              <div
                onClick={() => this.wayfinderRoute("projects")}
                className = "article__about-route-button --to-projects"
              >
                {this.state.pageText[4]}
              </div>
              <div
                onClick={() => this.wayfinderRoute("contact")}
                className = "article__about-route-button --to-contact"
              >
                {this.state.pageText[5]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;