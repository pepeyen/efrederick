import React, {Component} from 'react';

//Innerpage Routing
import { getElementPosition, updateScreenPosition } from '../../routing/InnerPageRouting';

//Styles
import './wayfinder.scss';

//Language library
import {wayfinder} from '../../language/lib/language-lib';

class Wayfinder extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : wayfinder.en_us,
      isWaydirectsHidden: true,
      waydirectLiveStatus: ['','','','']
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.wayfinderBarProgress);

    if(document.documentElement.clientWidth >= 784){
      this.setState({
        isWaydirectsHidden: true
      })
      this.updateWaydirectState({
        targetedState: "waydirect-visibility"
      })
    }

  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.wayfinderBarProgress);

  };

  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.setState({
        pageText : wayfinder[this.props.pageLanguage]
      });
    }

  };

  //Function to update the state with the current window width and height
  updateDimensions = () => {
    if(document.documentElement.clientWidth >= 784){
      this.setState({
        isWaydirectsHidden: true
      });
      this.updateWaydirectState({targetedState: "waydirect-visibility"})
    }

  };

  //Function that handles the overwall webapp inline styling
  updateWaydirectState = ({targetedState, targetedWaydirect}) => {
    switch (targetedState) {
      case "waydirect-visibility":
        this.setState({ 
          isWaydirectsHidden: !this.state.isWaydirectsHidden 
        })
        break;

      case "waydirect-live-status":
        let waydirectLiveStatus = ['','','','']

        for(let i = 0; i <= targetedWaydirect; i++){
          waydirectLiveStatus[i] = '--visited'
        }
        return waydirectLiveStatus;

      default:
        break;
    }
  };

  //Function that updates the progress bar styling
  wayfinderBarProgress = () => {
    let waydirectLiveStatus = ['','','',''];

    if(window.pageYOffset >= getElementPosition("about")){
      waydirectLiveStatus = this.updateWaydirectState({
        targetedState: "waydirect-live-status",
        targetedWaydirect: 0
      });
      if(window.pageYOffset >= getElementPosition("competencies")){
        waydirectLiveStatus = this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 1
        });
        if(window.pageYOffset >= getElementPosition("projects")){
          waydirectLiveStatus = this.updateWaydirectState({
            targetedState: "waydirect-live-status",
            targetedWaydirect: 2
          });
          if(window.pageYOffset >= getElementPosition("contact")){
            waydirectLiveStatus = this.updateWaydirectState({
              targetedState: "waydirect-live-status",
              targetedWaydirect: 3
            });
          }
        }
      }
    }
    this.setState({
      waydirectLiveStatus: waydirectLiveStatus
    });
  };

  //Function that handles UX given a target element
  wayfinderRouteTo = (targetedWaydirect) => {
    switch (targetedWaydirect) {
      case "about":
          updateScreenPosition("about");
          this.updateWaydirectState({
            targetedState: "waydirect-live-status",
            targetedWaydirect: 0
          });
          break;
      case "competencies":
        updateScreenPosition("competencies");
        this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 1
        });
        break;

      case "projects":
        updateScreenPosition("projects");
        this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 2
        });
        break;
      case "contact":
        updateScreenPosition("contact");
        this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 3
        });
        break;
                
      default:
        break;
    }
  };
  render() {
    return (
      <nav className="wayfinder">
        <ul className="wayfinder__waypaths">
          <div 
            id="wayfinder-about" 
            className={this.state.isWaydirectsHidden ? `wayfinder__waydirect ${this.state.waydirectLiveStatus[0]} --hidden` : 
            `wayfinder__waydirect ${this.state.waydirectLiveStatus[0]}`}
          >
            <li onClick={() => this.wayfinderRouteTo("about")}>{this.state.pageText[0]}</li>
          </div>
          <div 
            id="wayfinder-competencies" 
            className={this.state.isWaydirectsHidden ? `wayfinder__waydirect ${this.state.waydirectLiveStatus[1]} --hidden` : 
            `wayfinder__waydirect ${this.state.waydirectLiveStatus[1]}`}
          >
            <li onClick={() => this.wayfinderRouteTo("competencies")}>{this.state.pageText[1]}</li>
          </div>
          <div className="wayfinder__waysign">
            <li>eFrederick</li>
          </div>
          <div 
            id="wayfinder-projects" 
            className={this.state.isWaydirectsHidden ? `wayfinder__waydirect ${this.state.waydirectLiveStatus[2]} --hidden` : 
            `wayfinder__waydirect ${this.state.waydirectLiveStatus[2]}`}
          >
            <li onClick={() => this.wayfinderRouteTo("projects")}>{this.state.pageText[2]}</li>
          </div>
          <div 
            id="wayfinder-contact" 
            className={this.state.isWaydirectsHidden ? `wayfinder__waydirect ${this.state.waydirectLiveStatus[3]} --hidden` : 
            `wayfinder__waydirect ${this.state.waydirectLiveStatus[3]}`}
          >
            <li onClick={() => this.wayfinderRouteTo("contact")}>{this.state.pageText[3]}</li>
          </div>
        </ul>
        <div className="wayfinder__toggle"> 
          <div 
            className="wayfinder__hamburguer"
            onClick={() => this.updateWaydirectState({targetedState: "waydirect-visibility"})}
          />
        </div>
      </nav>
    );
  }
}

export default Wayfinder;