import React from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import {updateScreenPosition} from '../services'

//Language library
import {about} from '../language/lib';

const About = () => {
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
					<svg
						viewBox="0 0 512 512"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							opacity="0.25"
							d="M426.777 323.229C399.548 296 367.138 275.843 331.776 263.641C369.649 237.556 394.531 193.901 394.531 144.538C394.531 64.8432 329.694 0.00630188 250 0.00630188C170.306 0.00630188 105.469 64.8432 105.469 144.538C105.469 193.901 130.351 237.556 168.225 263.641C132.863 275.843 100.453 296 73.2236 323.229C26.0048 370.449 -3.8147e-05 433.229 -3.8147e-05 500.006H39.0625C39.0625 383.695 133.688 289.069 250 289.069C366.311 289.069 460.937 383.695 460.937 500.006H500C500 433.229 473.995 370.449 426.777 323.229ZM250 250.006C191.845 250.006 144.531 202.694 144.531 144.538C144.531 86.3813 191.845 39.0688 250 39.0688C308.155 39.0688 355.469 86.3813 355.469 144.538C355.469 202.694 308.155 250.006 250 250.006Z"
							fill="#22D1EE"
						/>
					</svg>
				</div>
			</div>
		</article>
	);
}

export default About;