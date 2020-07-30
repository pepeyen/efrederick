import React, {Component} from 'react';

//Styles
import './competencies.scss'
import '../pages.scss'

class Competencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : this.languageLibrary.en_us
    }; 
  }
  languageLibrary = {
    en_us: [
      "Competencies",
      "Career",
      "Companies i've worked and what i worked with",
      "Companies i've worked :",
      "Technical Support Internship",
      "Monitor and maintain Pitagora's computer systems and networks.",
      "Which are my main knowledges from web development",
      "Languages I speak :",
      "Dev Tools :",
      "Programming",
      "Which are my main knowledges aside from web development"
    ],
    pt_br: [
      "Competências",
      "Carreira",
      "Empresas com quem eu trabalhei e com o que trabalhei",
      "Empresas com quem eu trabalhei :",
      "Estágio de Suporte Técnico ",
      "Prover manuntenção aos aparelhos digitais e de rede da empresa",
      "Quais são meus maiores conhecimentos de desenvolvimento web",
      "Línguas qual eu falo :",
      "Ferramentas Dev :",
      "Programação",
      "Quais são meus maiores conhecimentos por fora do desenvolvimento web"
    ]
  }; 
  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.updatePageLanguage()
    }
  }
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
      <div id="competencies" className = "article">
        <div className="article__title  --reverted">{this.state.pageText[0]}</div>
        <div className = "article__box --spaced">
          <div className = "article__competence --secondary-article__competence"> 
            <div className = "article__competence-title">{this.state.pageText[1]}</div>
            <div className = "article__competence-info"><p>{this.state.pageText[2]}</p></div>
            <div className = "article__competence-description">
              <span>{this.state.pageText[3]}</span>
              <div className = "article__competence-sub-description">
                <p>Faculdade Pitágoras</p>
                <p>{this.state.pageText[4]}</p>
                <p>{this.state.pageText[5]}</p>
              </div>
            </div>
          </div>
          <div className = "article__competence">
            <div className = "article__competence-title">Web Front End</div>
            <div className = "article__competence-info"><p>{this.state.pageText[6]}</p></div>
            <div className = "article__competence-description">
              <span>{this.state.pageText[7]}</span>
              <div className = "article__competence-sub-description">
                <p>HTML</p>
                <p>CSS</p>
                <p>SCSS</p>
                <p>Javascript</p>
                <p>React.JS</p>
              </div>
              <span>{this.state.pageText[8]}</span>
              <div className = "article__competence-sub-description">
                <p>Github</p>
                <p>Terminal</p>
              </div>
            </div>
          </div>
          <div className = "article__competence">
            <div className = "article__competence-title">{this.state.pageText[9]}</div>
            <div className = "article__competence-info"><p>{this.state.pageText[10]}</p></div>
            <div className = "article__competence-description">
              <span>{this.state.pageText[7]}</span>
              <div className = "article__competence-sub-description">
                <p>C</p>
                <p>C#</p>
                <p>Java</p>
              </div>
              <span>{this.state.pageText[8]}</span>
              <div className = "article__competence-sub-description">
                <p>Visual Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Competencies;