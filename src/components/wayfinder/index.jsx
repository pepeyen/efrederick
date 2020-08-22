import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

//Innerpage Routing
import { getElementPosition, updateScreenPosition } from '../../routing/InnerPageRouting';

//Styles
import './wayfinder.scss';

//Language library
import {wayfinder} from '../../language/language-lib';

function Wayfinder() { 
  const currentPageLanguage = useSelector(state => state.pageLanguage);
  const pageText = wayfinder[currentPageLanguage]; 
  const [isWaydirectsHidden,setIsWaydirectsHidden] = useState(true);
  const [waydirectLiveStatus,setWaydirectLiveStatus] = useState(['','','','']);

  useEffect(() => {
    window.addEventListener("scroll", wayfinderBarProgress);

    return function cleanup() {
      window.removeEventListener("scroll", wayfinderBarProgress);
    }
  });
  /**
   * Handles the overwall application inline styling params are an object because they can and will be at a null value since each one,
   * it's switch case based.
   * 
   * @params {string}targetedState Which update it will perform 
   * @params {int}targetedWaydirect Used to be the max range to perform the styling update at the wayfinder
   */
  const updateWaydirectState = ({targetedState, targetedWaydirect}) => {
    switch (targetedState) {
      case "waydirect-visibility":
        setIsWaydirectsHidden(!isWaydirectsHidden);
        break;
      case "waydirect-live-status":
        //Re-setting the current state to ''
        let waydirectLiveStatus = ['','','',''];

        for(let i = 0; i <= targetedWaydirect; i++){
          waydirectLiveStatus[i] = '--visited'
        }
        return waydirectLiveStatus;
      default:
        break;
    }
  };

  /**
   * Updates the progress bar styling
   */
  const wayfinderBarProgress = () => {
    /**
     * Creating a scope array to prevent unintentional re-renders
     */
    let waydirectLiveStatus = ['','','',''];

    /**
     * This is a bad implementation, still looking on how to trigger the style update,
     * only when it hits a certain page height (target component).
     */
    if(window.pageYOffset >= getElementPosition("about")){
      waydirectLiveStatus = updateWaydirectState({
        targetedState: "waydirect-live-status",
        targetedWaydirect: 0
      });
      if(window.pageYOffset >= getElementPosition("competencies")){
        waydirectLiveStatus = updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 1
        });
        if(window.pageYOffset >= getElementPosition("projects")){
          waydirectLiveStatus = updateWaydirectState({
            targetedState: "waydirect-live-status",
            targetedWaydirect: 2
          });
          if(window.pageYOffset >= getElementPosition("contact")){
            waydirectLiveStatus = updateWaydirectState({
              targetedState: "waydirect-live-status",
              targetedWaydirect: 3
            });
          }
        }
      }
    }
    setWaydirectLiveStatus(waydirectLiveStatus);
  };

  /**
   * Handles UX given a target element
   * @params {string}targetedWaydirect Targeted element to be routed to
   */
  const wayfinderRouteTo = (targetedWaydirect) => {
    switch (targetedWaydirect) {
      case "about":
          updateScreenPosition("about");
          updateWaydirectState({
            targetedState: "waydirect-live-status",
            targetedWaydirect: 0
          });
          break;
      case "competencies":
        updateScreenPosition("competencies");
        updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 1
        });
        break;

      case "projects":
        updateScreenPosition("projects");
        updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 2
        });
        break;
      case "contact":
        updateScreenPosition("contact");
        updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 3
        });
        break;
                
      default:
        break;
    }
  };
  
  return (
    <nav className="wayfinder">
      <ul className="wayfinder__waypaths">
        <div 
          id="wayfinder-about" 
          className={isWaydirectsHidden ? `wayfinder__waydirect ${waydirectLiveStatus[0]} --hidden` : 
          `wayfinder__waydirect ${waydirectLiveStatus[0]}`}
        >
          <li onClick={() => wayfinderRouteTo("about")}>{pageText[0]}</li>
        </div>
        <div 
          id="wayfinder-competencies" 
          className={isWaydirectsHidden ? `wayfinder__waydirect ${waydirectLiveStatus[1]} --hidden` : 
          `wayfinder__waydirect ${waydirectLiveStatus[1]}`}
        >
          <li onClick={() => wayfinderRouteTo("competencies")}>{pageText[1]}</li>
        </div>
        <div className="wayfinder__waysign">
          <li>eFrederick</li>
        </div>
        <div 
          id="wayfinder-projects" 
          className={isWaydirectsHidden ? `wayfinder__waydirect ${waydirectLiveStatus[2]} --hidden` : 
          `wayfinder__waydirect ${waydirectLiveStatus[2]}`}
        >
          <li onClick={() => wayfinderRouteTo("projects")}>{pageText[2]}</li>
        </div>
        <div 
          id="wayfinder-contact" 
          className={isWaydirectsHidden ? `wayfinder__waydirect ${waydirectLiveStatus[3]} --hidden` : 
          `wayfinder__waydirect ${waydirectLiveStatus[3]}`}
        >
          <li onClick={() => wayfinderRouteTo("contact")}>{pageText[3]}</li>
        </div>
      </ul>
      <div className="wayfinder__toggle"> 
        <div 
          className="wayfinder__hamburguer"
          onClick={() => updateWaydirectState({targetedState: "waydirect-visibility"})}
        />
      </div>
    </nav>
  );
}

export default Wayfinder;