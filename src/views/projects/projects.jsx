import React, {Component} from 'react';

//Styles
import './projects.scss'
import '../pages.scss'

//Language library
import {projects} from '../../language/lib/language-lib'

class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : projects.en_us
    }; 
  }
  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.setState({
        pageText : projects[this.props.pageLanguage]
      });
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
                  <a 
                    className="project__button" 
                    href="https://pepeyen.github.io/efrederick-cli/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {this.state.pageText[1]}
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="project__image --cstech"/>
                <div className="project__description">
                  <div className="project__title">CS Tech</div>
                  <a 
                    className="project__button" 
                    href="https://pepeyen.github.io/cs-tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {this.state.pageText[1]}
                </a>
                </div>  
              </div>
              <div className="project">
                <div className="project__image --efrederick"/>
                <div className="project__description">
                  <div className="project__title">eFrederick</div>
                  <a 
                    className="project__button" 
                    href="https://efrederick.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {this.state.pageText[1]}
                  </a>
                </div> 
              </div>
          </div>
      </article>
    );
  }
}

export default Projects;