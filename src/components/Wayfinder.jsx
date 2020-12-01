import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import {
	getElementPosition,
	updateScreenPosition
} from '../services';

//Language library
import {wayfinder} from '../language/lib';

const Wayfinder = () => { 
	const currentPageLanguage = useSelector(state => state.pageLanguage);
	const pageText = wayfinder[currentPageLanguage]; 

	/**
	* Handles the overwall application inline styling params are an object because they can and will be at a null value since each one,
	* it's switch case based.
	* 
	* @params {string}targetedState Which update it will perform 
	* @params {string}targetedWaydirect Uses the target element id to perform the styling update at the wayfinder
	*/
	const updateWaydirectState = ({targetedState, targetedWaydirect}) => {
		switch (targetedState) {
		case "waydirect-visibility":
			document.getElementById('wayfinder-waypaths').childNodes.forEach(element => {
				if(element.id && element.id !== 'wayfinder-toggle'){
					const splittedClassname = element.className.split(' ');

					if(splittedClassname.find(className => className === '--visible')){
						element.classList.remove('--visible');
					}else{
						element.classList.add('--visible');
					}
				}
			});

			break;
		case "waydirect-live-status":
			let targetIndex = -1;
			const waydirectElement = document.getElementById(targetedWaydirect);
			const wayfinderWaypaths = document.getElementById('wayfinder-waypaths');

			wayfinderWaypaths.childNodes.forEach((element, index) => {
				if(element.id && element === waydirectElement){         
					targetIndex = index;
				}
			});

			wayfinderWaypaths.childNodes.forEach((element, index) => {
			if(element.id){
				if(index <= targetIndex){
					element.classList.add('--visited'); 
				}else{
					element.classList.remove('--visited');
				}
			}
			});

			break;
		default:
			break;
		}
	};

  	/**
   	* Updates the progress bar styling
   	*/
	const wayfinderBarProgress = () => {
		/**
		 * This is a bad implementation, still looking on how to trigger the style update,
		 * only when it hits a certain page height (target component).
		 */
		if(window.pageYOffset >= 0){
			updateWaydirectState({
				targetedState: "waydirect-live-status",
				targetedWaydirect: "wayfinder-about"
			});
			if(window.pageYOffset >= getElementPosition("competencies")){
				updateWaydirectState({
					targetedState: "waydirect-live-status",
					targetedWaydirect: "wayfinder-competencies"
				});
				if(window.pageYOffset >= getElementPosition("projects")){
					updateWaydirectState({
						targetedState: "waydirect-live-status",
						targetedWaydirect: "wayfinder-projects"
					});
					if(window.pageYOffset >= getElementPosition("contact")){
						updateWaydirectState({
							targetedState: "waydirect-live-status",
							targetedWaydirect: "wayfinder-contact"
						});
					}
				}
			}
		}
	};
	/**
	 * Handles UX given a target element
	 * @params {string}targetedWaydirect Targeted element to be routed to
	 */
	const wayfinderRouteTo = (e) => {
		updateScreenPosition(e.currentTarget.id.split('-')[1]);
	};

	useEffect(() => {
		window.addEventListener("scroll", wayfinderBarProgress);
		
		return () => window.removeEventListener("scroll", wayfinderBarProgress);
	});
	
	return (
		<nav 
			className="wayfinder"
			role="navigation"
		>
			<ul
				id="wayfinder-waypaths"
				className="wayfinder__waypaths"
			>
				<li 
					id="wayfinder-about" 
					className='wayfinder__waydirect'
					onClick={wayfinderRouteTo}
				>
					<p>{pageText[0]}</p>
				</li>
				<li 
					id="wayfinder-competencies" 
					className='wayfinder__waydirect'
					onClick={wayfinderRouteTo}
				>
					<p>{pageText[1]}</p>
				</li>
				<li className="wayfinder__waysign">
					<p>eFrederick</p>
				</li>
				<li 
					id="wayfinder-projects" 
					className='wayfinder__waydirect'
					onClick={wayfinderRouteTo}
				>
					<p>{pageText[2]}</p>
				</li>
				<li 
					id="wayfinder-contact" 
					className='wayfinder__waydirect'
					onClick={wayfinderRouteTo}
				>
					<p>{pageText[3]}</p>
				</li>
				<li
					id="wayfinder-toggle"
					className="wayfinder__toggle"
					onClick={() => updateWaydirectState({targetedState: "waydirect-visibility"})}
				> 
					<div className="wayfinder__hamburguer">
						<svg
							viewBox="0 0 512 512"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M368 207.668H16C7.16797 207.668 0 200.5 0 191.668C0 182.836 7.16797 175.668 16 175.668H368C376.832 175.668 384 182.836 384 191.668C384 200.5 376.832 207.668 368 207.668Z"
									fill="#E2F3F5"
								/>
							<path
								d="M368 85H16C7.16797 85 0 77.832 0 69C0 60.168 7.16797 53 16 53H368C376.832 53 384 60.168 384 69C384 77.832 376.832 85 368 85Z"
								fill="#E2F3F5"
							/>
							<path
								d="M368 330.332H16C7.16797 330.332 0 323.164 0 314.332C0 305.5 7.16797 298.332 16 298.332H368C376.832 298.332 384 305.5 384 314.332C384 323.164 376.832 330.332 368 330.332Z"
								fill="#E2F3F5"
							/>
						</svg>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Wayfinder;