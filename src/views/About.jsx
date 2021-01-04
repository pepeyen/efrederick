import React, {
	useEffect,
	useState
} from 'react';
import {
	useSelector,
	useDispatch
} from 'react-redux';

//Innerpage Routing
import {
	updateScreenPosition,
	animateValue,
	fetchFromBackEnd
} from '../services'

//Language library
import {about} from '../language/lib';

//Actions
import {setProjectList} from '../actions';

const About = () => {
	const currentPageLanguage = useSelector(state => state.pageLanguage);
	const pageText = about[currentPageLanguage];
	const [isLoading, setIsLoading] = useState(false);
	const [linesOfCode, setLinesOfCode] = useState(-1);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);

		fetchFromBackEnd('projects', null, {method: 'GET'})
		.then(data => {
			if(data.success){
				const totalLinesOfCode = data.projects.totalLOC, totalNumberOfRepos = data.projects.count;

				setIsLoading(false);

				setLinesOfCode({totalLinesOfCode, totalNumberOfRepos});
	
				animateValue("lines-of-code", Math.round(totalLinesOfCode * 0.99), totalLinesOfCode, 340);
				animateValue("total-repos", Math.round(totalNumberOfRepos * 0.2), totalNumberOfRepos, 340);
	
				dispatch(setProjectList(data.projects.list));
			}
		})
	},[dispatch]);

	return(
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
					<div className="about__repo-info">
						<ul className={isLoading ? '--loading-info' : null}>
							<li className="title">
								<span id="lines-of-code">
									{isLoading ? pageText[6] : linesOfCode.totalLinesOfCode}
								</span> {pageText[7]}
							</li>
							<li className="title">
								<span id="total-repos">
									{isLoading ? pageText[6] : linesOfCode.totalNumberOfRepos}
								</span> {pageText[8]}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
	);	
}

export default About;