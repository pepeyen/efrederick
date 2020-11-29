import React from 'react';
import {useSelector} from 'react-redux';

//Styles
import './projects.scss';
import '../pages.scss';

//Language library
import {projects} from '../../assets/language/lib';

//Services
import {projectList} from '../../services/mockUpData';

function Projects (){
  const  currentPageLanguage = useSelector(state => state.pageLanguage);
  const pageText = projects[currentPageLanguage];

  return (
    <article id="projects"> 
		<div className="title">{pageText[0]}</div>
    	<ul className="container --grid-3">
			{
				projectList.map((element, index) => {
				return(
					<li
						key={index}
						className="project"
					>
						<div className="project__image" style={{backgroundImage: `url('${element.projectBannerURL}')`}}/>
						<div className="project__description">
							<div className="project__title">{element.projectName}</div>
							<div className="project__outside">
								<a 
									className="project__button --demo" 
									href={element.projectLiveURL}
									target="_blank" 
									rel="noopener noreferrer"
								>
									<p>{pageText[1]}</p>
								</a>
								<div className="project__button-divider"/>
								<a 
									className="project__button --source" 
									href={`https://github.com/pepeyen/${element.projectName}`}
									target="_blank" 
									rel="noopener noreferrer"
								>
									<p>{pageText[2]}</p>
								</a>
							</div>
						</div>
					</li>
				);
				})
			}
		</ul>
    </article>
  );
}

export default Projects;