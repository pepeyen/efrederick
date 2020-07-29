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
          <div className="artcile__title">{this.state.pageText[0]}</div>
          <div className = "article__box --flex">
              <a className = "project__box" href = "https://pepeyen.github.io/efrederick-cli/" target = "_blank" rel="noopener noreferrer">
                <div className = "project__image --efrederickcli"/>
                <div className = "project__title">eFrederick CLI</div>
                <div className = "project__description">{this.state.pageText[1]}</div>
              </a>
              <a className = "project__box" href = "https://pepeyen.github.io/cs-tech/" target = "_blank" rel="noopener noreferrer">
                <div className = "project__image --cstech"/>
                <div className = "project__title">CS Tech</div>
                <div className = "project__description">{this.state.pageText[1]}</div>
              </a>
              <a className = "project__box" href = "https://pepeyen.github.io/efrederick/" target = "_blank" rel="noopener noreferrer">
                <div className = "project__image --efrederick"/>
                <div className = "project__title">eFrederick</div>
                <div className = "project__description">{this.state.pageText[1]}</div>
              </a>
          </div>
      </div>
    );
  }
}

export default Projects;