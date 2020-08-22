import React from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import { updateScreenPosition } from '../../routing/InnerPageRouting'

//Styles
import './about.scss';
import '../pages.scss';

//Language library
import {about} from '../../language/language-lib';

function About (){
  const currentPageLanguage = useSelector(state => state.pageLanguage);
  const pageText = about[currentPageLanguage]; 

  return (
    <article id="about">
      <div className="title">{pageText[0]}</div>
      <div className="container">
        <div className="about"> 
          <div className="about__headline">
            <div className="about__headline-comment --start">
              <p>{pageText[1]}</p>
            </div>
            <p>{pageText[2]}</p>
            <div className="about__headline-comment --end">
              <p>{pageText[3]}</p>
            </div>
            <div className="about__route">
              <div
                onClick={() => updateScreenPosition("projects")}
                className="about__route-button --to-projects"
              >
                {pageText[4]}
              </div>
              <div
                onClick={() => updateScreenPosition("contact")}
                className="about__route-button --to-contact"
              >
                {pageText[5]}
              </div>
            </div>
          </div>        
        </div>
      </div>
    </article>
  );
}

export default About;