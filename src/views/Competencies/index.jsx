import React from 'react';
import {useSelector} from 'react-redux';

//Styles
import './competencies.scss';
import '../pages.scss';

//Language library
import {competencies} from '../../assets/language/lib';

function Competencies (){
  const currentPageLanguage = useSelector(state => state.pageLanguage);
  const pageText = competencies[currentPageLanguage]; 

  return (
    <article id="competencies">
      <div className="title  --reverted">{pageText[0]}</div>
      <div className="container --spaced">
        <div className="competence"> 
          <div className = "competence__headline">
            <div className="competence__name"><p>{pageText[1]}</p></div>
            <div className="competence__info"><p>{pageText[2]}</p></div>
          </div>
          <div className="competence__description">
            <span>{pageText[3]}</span>
            <div className="competence__sub-description">
              <p>Faculdade Pitágoras</p>
              <p>{pageText[4]}</p>
              <p>{pageText[5]}</p>
            </div>
          </div>
        </div>
        <div className="competence">
          <div className = "competence__headline">
            <div className="competence__name"><p>{pageText[6]}</p></div>
            <div className="competence__info"><p>{pageText[7]}</p></div>
          </div>
          <div className="competence__description">
            <span>Front-End</span>
            <div className="competence__sub-description">
              <p>HTML</p>
              <p>CSS</p>
              <p>Sass</p>
              <p>Javascript</p>
              <p>React.JS</p>
            </div>
            <span>Back-End</span>
            <div className="competence__sub-description">
              <p>Node.JS</p>
            </div>
          </div>
        </div>
        <div className="competence">
          <div className = "competence__headline">
            <div className="competence__name"><p>{pageText[8]}</p></div>
            <div className="competence__info"><p>{pageText[9]}</p></div>
          </div>
          <div className="competence__description">
            <span>{pageText[10]}</span>
            <div className="competence__sub-description">
              <p>C</p>
              <p>C# (.net)</p>
              <p>Java</p>
            </div>
            <span>{pageText[11]}</span>
            <div className="competence__sub-description">
              <p>Visual Studio</p>
              <p>Visual Studio Code</p>
              <p>Git</p>
              <p>Terminal</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Competencies;