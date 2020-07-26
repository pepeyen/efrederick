import React from 'react';
import '../pages.scss'

function Projects() {
  return (
    <div id="projects" className = "article">
        <div className="artcile__title">Projects</div>
        <div className = "article__box --flex">
            <a className = "project__box" href = "https://github.com/pepeyen/efrederick-cli" target = "_blank" rel="noopener noreferrer">
              <div className = "project__title">eFrederick CLI</div>
              <div className = "project__image --efrederickcli"/>
              <div className = "project__description">
                <p>A more gimmick version of my portfolio</p>
              </div>
            </a>
            <a className = "project__box" href = "https://github.com/pepeyen/efrederick" target = "_blank" rel="noopener noreferrer">
              <div className = "project__title">CS Tech</div>
              <div className = "project__image --cstech"/>
              <div className = "project__description">
                <p>A webapp where i used to learn React.JS and API consumption</p>
              </div>
            </a>
            <a className = "project__box" href = "https://github.com/pepeyen/cs-tech" target = "_blank" rel="noopener noreferrer">
              <div className = "project__title">eFrederick</div>
              <div className = "project__image --efrederick"/>
              <div className = "project__description">
                <p>This webapp</p>
              </div>
            </a>
        </div>
    </div>
  );
}

export default Projects;