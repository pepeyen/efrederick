import React from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import {updateScreenPosition} from '../services'

//Language library
import {about} from '../assets/language/lib';

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
              <button
                onClick={() => updateScreenPosition("projects")}
                className="about__route-button --to-projects"
              >
                {pageText[4]}
              </button>
              <button
                onClick={() => updateScreenPosition("contact")}
                className="about__route-button --to-contact --box-shadowed"
              >
                {pageText[5]}
              </button>
            </div>
          </div>        
        </div>
      </div>
    </article>
  );
}

export default About;