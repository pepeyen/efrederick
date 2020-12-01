import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import {
  getElementPosition,
  updateScreenPosition
} from '../services';

//Language library
import {wayfinder} from '../assets/language/lib';

function Wayfinder() { 
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

            if(splittedClassname.find(className => className === '--hidden')){
              element.classList.remove('--hidden');
            }else{
              element.classList.add('--hidden');
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
    updateWaydirectState({targetedState: "waydirect-visibility"});

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
          <div className="wayfinder__hamburguer"/>
      </li>
      </ul>
    </nav>
  );
}

export default Wayfinder;