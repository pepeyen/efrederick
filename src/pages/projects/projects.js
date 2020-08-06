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
      <div id="projects" className = "article">
          <div className="article__title">{this.state.pageText[0]}</div>
          <div className = "article__box --spaced-flex">
              <div className = "article__project-box">
                <div className = "article__project-image --efrederickcli"/>
                <div className = "article__project-description">
                  <div className = "article__project-title">eFrederick CLI</div>
                  <a className = "article__project-button" href = "https://pepeyen.github.io/efrederick-cli/" target = "_blank" rel="noopener noreferrer">{this.state.pageText[1]}</a>
                </div>
              </div>
              <div className = "article__project-box">
                <div className = "article__project-image --cstech"/>
                <div className = "article__project-description">
                  <div className = "article__project-title">CS Tech</div>
                  <a className = "article__project-button" href = "https://pepeyen.github.io/cs-tech/" target = "_blank" rel="noopener noreferrer">{this.state.pageText[1]}</a>
                </div>  
              </div>
              <div className = "article__project-box">
                <div className = "article__project-image --efrederick"/>
                <div className = "article__project-description">
                  <div className = "article__project-title">eFrederick</div>
                  <a className = "article__project-button" href = "https://pepeyen.github.io/efrederick/" target = "_blank" rel="noopener noreferrer">{this.state.pageText[1]}</a>
                </div> 
              </div>
          </div>
      </div>
    );
  }
}

export default Projects;