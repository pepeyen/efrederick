import React, {Component} from 'react';

//Styles
import './projects.scss'
import '../pages.scss'

class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : this.languageLibrary.en_us
    }; 
  }
  languageLibrary = {
    en_us: [
      "Projects",
      "Click here to visit the webapp"
    ],
    pt_br: [
      "Projetos",
      "Clique aqui para visitar o aplicativo web"
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
  render() {
    return (
      <article id="projects"> 
          <div className="title">{this.state.pageText[0]}</div>
          <div className="container --spaced-flex">
              <div className="project">
                <div className="project__image --efrederickcli"/>
                <div className="project__description">
                  <div className="project__title">eFrederick CLI</div>
                  <a className="project__button" href = "https://pepeyen.github.io/efrederick-cli/" target = "_blank" rel="noopener noreferrer">{this.state.pageText[1]}</a>
                </div>
              </div>
              <div className="project">
                <div className="project__image --cstech"/>
                <div className="project__description">
                  <div className="project__title">CS Tech</div>
                  <a className="project__button" href = "https://pepeyen.github.io/cs-tech/" target = "_blank" rel="noopener noreferrer">{this.state.pageText[1]}</a>
                </div>  
              </div>
              <div className="project">
                <div className="project__image --efrederick"/>
                <div className="project__description">
                  <div className="project__title">eFrederick</div>
                  <a className="project__button" href = "https://efrederick.dev/" target = "_blank" rel="noopener noreferrer">{this.state.pageText[1]}</a>
                </div> 
              </div>
          </div>
      </article>
    );
  }
}

export default Projects;