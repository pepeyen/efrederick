import React, {Component} from 'react';
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
      "Position Info",
      "Technical Support Internship",
      "Monitor and maintain Pitagora's computer systems and networks.",
      "Which are my main loves from web development",
      "Languages I speak :",
      "Dev Tools :",
      "Programming",
      "Which are my loves aside from web development"
    ],
    pt_br: [
      "Competências",
      "Carreira",
      "Empresas com quem eu trabalhei e com o que trabalhei",
      "Empresas com quem eu trabalhei :",
      "Informação sobre a posição",
      "Estágio de Suporte Técnico ",
      "Prover manuntenção aos aparelhos digitais e de rede da empresa",
      "Quais são meus maiores amores de desenvolvimento web",
      "Línguas qual eu falo :",
      "Ferramentas Dev :",
      "Programação",
      "Quais são meus amores por fora do desenvolvimento web"
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
        <div className="artcile__title  --reverted">{this.state.pageText[0]}</div>
        <div className = "article__box --spaced">
          <div className = "article__image --competencies"> 
            <div className = "article__sub-title">{this.state.pageText[1]}</div>
            <div className = "article__sub-text">
              <p>{this.state.pageText[2]}</p>
              <span>{this.state.pageText[3]}</span>
              <p>Faculdade Pitágoras</p>
              <p className = "position-description-title">{this.state.pageText[4]}</p>
              <span>{this.state.pageText[5]}</span>
              <p>{this.state.pageText[6]}</p>
            </div>
          </div>
          <div className = "article__image --competencies --spaced-middle">
            <div className = "article__sub-title">Web Front End</div>
            <div className = "article__sub-text">
              <p>{this.state.pageText[7]}</p>
              <span>{this.state.pageText[8]}</span>
              <p>HTML</p>
              <p>CSS</p>
              <p>SCSS</p>
              <p>Javascript</p>
              <p>React.JS</p>
              <span>{this.state.pageText[9]}</span>
              <p>Github</p>
              <p>Terminal</p>
            </div>
          </div>
          <div className = "article__image --competencies">
            <div className = "article__sub-title">{this.state.pageText[10]}</div>
            <div className = "article__sub-text">
              <p>{this.state.pageText[11]}</p>
              <span>{this.state.pageText[8]}</span>
              <p>C</p>
              <p>C#</p>
              <p>Java</p>
              <span>{this.state.pageText[9]}</span>
              <p>Visual Studio</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Competencies;