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
	getRepoList,
	getRepo,
	animateValue
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

		fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/v1/keys`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				keyId: 'ghub:1',
				keyOrigin: 'github'
			})
		})
		.then(response => {
			return response.json();
		})
		.then(data => {
			return data.key;
		})
		.then(key => {
			if(key.api_key_value){
				const myHeaders = new Headers();

				myHeaders.append('authorization', `token ${key.api_key_value}`);

				getRepoList('pepeyen', myHeaders)
				.then(data => {
					let projectList = [];

					data.forEach(repository => {
						if(repository.homepage && repository.name !== 'efrederick'){
							projectList.push({
								repositoryName: repository.name,
								reporitoryThumbnailURL: `https://raw.githubusercontent.com/${repository.owner.login}/${repository.name}/master/.github/images/project-thumbnail.png`,
								repositoryURL: repository.html_url,
								repositoryDemoURL: repository.homepage
							});
						}
					});

					dispatch(setProjectList(projectList));

					return data;
				})
				.then(data => {
					return data.map(currentRepo => getRepo('pepeyen', currentRepo.name, myHeaders)
					.then(contributors => contributors
						.map(contributor => contributor.weeks
							.reduce((lineCount, week) => lineCount + week.a - week.d, 0)
						)
					)
					.then(lineCounts => {
						return lineCounts.reduce((lineTotal, lineCount) => {
							return lineTotal + lineCount;
						});
					})
					.then(lines => {
						return lines;
					}))
				})
				.then(result => {
					return Promise.all(result);
				})
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

					setIsLoading(false);
					setLinesOfCode({totalLinesOfCode, totalNumberOfRepos});

					animateValue("lines-of-code", Math.round(totalLinesOfCode * 0.9), totalLinesOfCode, 340);
					animateValue("total-repos", Math.round(totalNumberOfRepos * 0.2), totalNumberOfRepos, 340);
				})
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