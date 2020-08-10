import React, {Component} from 'react';

//Innerpage Routing
import { updateScreenPosition } from '../../routing/PageRouting'

//Styles
import './about.scss'
import '../pages.scss'

//Language library
import {about} from '../../language/lib/language-lib'


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : about.en_us
    }; 
  }

  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.setState({
        pageText : about[this.props.pageLanguage]
      });
    }
  };
  render() {
    return (
      <article id="about">
        <div className="title">{this.state.pageText[0]}</div>
        <div className="container">
          <div className="about"> 
            <div className="about__headline">
              <div className="about__headline-comment --start">
                <p>{this.state.pageText[1]}</p>
              </div>
              <p>{this.state.pageText[2]}</p>
              <div className="about__headline-comment --end">
                <p>{this.state.pageText[3]}</p>
              </div>
              <div className="about__route">
                <div
                  onClick={() => updateScreenPosition("projects")}
                  className="about__route-button --to-projects"
                >
                  {this.state.pageText[4]}
                </div>
                <div
                  onClick={() => updateScreenPosition("contact")}
                  className="about__route-button --to-contact"
                >
                  {this.state.pageText[5]}
                </div>
              </div>
            </div>        
          </div>
        </div>
      </article>
    );
  }
}

export default About;