import React, {Component} from 'react';

//Styles
import './competencies.scss'
import '../pages.scss'

//Language library
import {competencies} from '../../language/lib/language-lib'


class Competencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : competencies.en_us
    }; 
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.setState({
        pageText : competencies[this.props.pageLanguage]
      });
    }
  }
  render() {
    return (
      <article id="competencies">
        <div className="title  --reverted">{this.state.pageText[0]}</div>
        <div className="container --spaced">
          <div className="competence"> 
            <div className="competence__name">{this.state.pageText[1]}</div>
            <div className="competence__info"><p>{this.state.pageText[2]}</p></div>
            <div className="competence__description">
              <span>{this.state.pageText[3]}</span>
              <div className="competence__sub-description">
                <p>Faculdade Pitágoras</p>
                <p>{this.state.pageText[4]}</p>
                <p>{this.state.pageText[5]}</p>
              </div>
            </div>
          </div>
          <div className="competence">
            <div className="competence__name">Web Front End</div>
            <div className="competence__info"><p>{this.state.pageText[6]}</p></div>
            <div className="competence__description">
              <span>{this.state.pageText[7]}</span>
              <div className="competence__sub-description">
                <p>HTML</p>
                <p>CSS</p>
                <p>SCSS</p>
                <p>Javascript</p>
                <p>React.JS</p>
              </div>
              <span>{this.state.pageText[8]}</span>
              <div className="competence__sub-description">
                <p>Github</p>
                <p>Terminal</p>
              </div>
            </div>
          </div>
          <div className="competence">
            <div className="competence__name">{this.state.pageText[9]}</div>
            <div className="competence__info"><p>{this.state.pageText[10]}</p></div>
            <div className="competence__description">
              <span>{this.state.pageText[7]}</span>
              <div className="competence__sub-description">
                <p>C</p>
                <p>C#</p>
                <p>Java</p>
              </div>
              <span>{this.state.pageText[8]}</span>
              <div className="competence__sub-description">
                <p>Visual Studio</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Competencies;