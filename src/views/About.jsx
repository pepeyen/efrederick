import React, {
	useState,
	useEffect
} from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import {
	updateScreenPosition,
	getRepoList,
	getRepo
} from '../services'

//Language library
import {about} from '../language/lib';

const About = () => {
	const currentPageLanguage = useSelector(state => state.pageLanguage);
	const [linesOfCode, setLinesOfCode] = useState('');
	const pageText = about[currentPageLanguage]; 

	useEffect(() => {
		const statusList = document.getElementById('status-list');

		const myHeaders = new Headers();

		myHeaders.append('authorization', `token ${process.env.REACT_APP_GITHUB_KEY}`);

		getRepoList('pepeyen', myHeaders)
		.then(data => data
			.map(currentRepo => getRepo('pepeyen', currentRepo.name, myHeaders)
				.then(contributors => contributors
					.map(contributor => contributor.weeks
						.reduce((lineCount, week) => lineCount + week.a - week.d, 0)
					)
				)
				.then(lineCounts => lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount))
				.then(lines => lines)
			)
		)
		.then(result => Promise.all(result))
		.then(linesOfCodeList => {
			let totalLinesOfCode = 0, totalNumberOfRepos = 0;

			linesOfCodeList.map(currentRepoLinesOfCode => {
				if(currentRepoLinesOfCode >= 300){
					totalLinesOfCode = totalLinesOfCode + Math.round(currentRepoLinesOfCode * 0.01);
				}else{
					totalLinesOfCode = totalLinesOfCode + currentRepoLinesOfCode;
				}
				
				return null;
			})
			totalNumberOfRepos = linesOfCodeList.length;

			setLinesOfCode({totalLinesOfCode, totalNumberOfRepos});

			for(let i = 0;i < statusList.childNodes.length;i ++){
				(() => {
					const timer = setTimeout(() => {
						if(statusList.childNodes[i].style.display !== 'block'){
							statusList.childNodes[i].style.display = 'block';
						}else{
							statusList.childNodes[i].style.display = 'none';
						}
					}, 500 * (i + 1));
					return () => clearTimeout(timer);
				})();
			}
		})
	},[]);

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
					<ul id="status-list">
						<li className="title"><span>{linesOfCode.totalLinesOfCode}</span> {pageText[6]}</li>
						<li className="title"><span>{linesOfCode.totalNumberOfRepos}</span> {pageText[7]}</li>
					</ul>
				</div>
			</div>
		</article>
	);	
}

export default About;