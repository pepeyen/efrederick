import React, {Component} from 'react';
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
      "Hi my name is Erick Frederick i'm Brazillian and i love programming",
      "My few close loves are from front-end as ",
      "I also love programming with ",
      " and ",
      "Looking for a developer?",
      "You can reach me at the end of the page"
    ],
    pt_br: [
      "Sobre",
      "Olá meu nome é Erick Frederick sou Brasileiro e amo programar",
      "Meus melhores amores vêm do front-end como ",
      "Eu também amo programar ",
      " e ",
      "Procurando um desenvolvedor?",
      "Você pode entrar em contato comigo no final desta página"
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
      <div id="about" className = "article">
          <div className="artcile__title">{this.state.pageText[0]}</div>
          <div className = "article__box">
              <div className = "article__text">
                  <p>{this.state.pageText[1]}</p>
                  <p>{this.state.pageText[2]}<span className = "--language-html">HTML</span>, <span className = "--language-css">CSS</span>, <span className = "--language-reactjs">React.JS</span></p>
                  <p>{this.state.pageText[3]}<span className = "--language-c">C</span>{this.state.pageText[4]}<span className = "--language-dotnet">C#</span></p>
                  <p>{this.state.pageText[5]}</p>
                  <p>{this.state.pageText[6]}</p>
              </div>
              <div className = "article__image --about"/>
          </div>
      </div>
    );
  }
}

export default About;