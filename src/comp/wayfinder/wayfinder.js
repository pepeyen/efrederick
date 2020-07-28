import React, {Component} from 'react';

//Styles
import './wayfinder.scss';

class Wayfinder extends Component { 
  waydirectVisitStatus = ['','','','']
  waydirectVisibilityStatus = '--visible'
  
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: 0,
      deviceHeight: 0,
      wayfinderBarStyle: { },
      wayfinderProgress: "0%",
      isWaydirectsHidden: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.wayfinderBarProgress);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.wayfinderBarProgress);
  }

  //Function to update the state with the current window width and height
  updateDimensions = () => {
    if(document.documentElement.clientWidth >= 784){
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      this.setState({
        isWaydirectsHidden: true
      })
      this.updateStyle({targetedStyle: "waydirect-visibility"})
    }
  };

  //Function that handles the overwall webapp inline styling
  updateStyle = ({targetedStyle, targetedWaydirect}) => {
    switch (targetedStyle) {
      case "wayfinder-progression-bar":
        if(document.documentElement.clientWidth >= 801){
          this.setState({
            wayfinderBarStyle: {
              width: this.state.wayfinderProgress,
              transitionProperty : "width",
              transitionDuration : "2ms",
              position : "absolute",
              borderTop : ".5vh solid #22d1ee",
              display : "block"
            }
          })
        }else {
          this.setState({
            wayfinderBarStyle: {
              display : "none"
            }
          })
        }
        break;
      case "waydirect-visibility":
        if(this.state.isWaydirectsHidden === false){
          this.waydirectVisibilityStatus = '--hidden'
          this.setState({ isWaydirectsHidden: true })
        }else{
          this.waydirectVisibilityStatus = '--visible'
          this.setState({ isWaydirectsHidden: false })
        }
        break;
      case "waydirect-live-status":
        for(let i = 0; i <= targetedWaydirect; i++){
          this.waydirectVisitStatus[i] = '--visited'
        }
    
        let maxWaydirect = this.waydirectVisitStatus.length--
    
        for(let i = maxWaydirect; i > targetedWaydirect; i--){
          this.waydirectVisitStatus[i] = '--unvisited'
        }
        break;
      default:
        break;
    }
  };

  //Function that calculates the percentage of a given height based on the total height of the page
  getScrollPercentage = (currentHeight) => {
    let pageTotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    return((currentHeight / pageTotalHeight) * 100);
  };

  //Function that calcultes the current height of a given element inside the page
  getElementHeight = (elementId) => {
    let element = document.getElementById(elementId)
    let wayfinderCurrentHeight
    if(document.documentElement.clientWidth >= 784){
      wayfinderCurrentHeight = (((Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 15.5))) / 100
    } else wayfinderCurrentHeight = 25.5 * 16

    let waydirectCoordinate = ((element.offsetTop - element.scrollTop) - wayfinderCurrentHeight);

    return waydirectCoordinate
  };

  //Function that updates the client viewing position given a target element
  updateScreenPosition = (targetedWaydirect) => {
    window.scrollTo({
      top: this.getElementHeight(targetedWaydirect),
      left: 0,
      behavior: 'smooth'
    });
  };

  //Function that updates the progress bar styling
  wayfinderBarProgress = () => {
    this.setState({
      wayfinderProgress: `${this.getScrollPercentage(window.scrollY)}%`
    });
    this.updateStyle({targetedStyle: "wayfinder-progression-bar"})
    if(window.scrollY >= this.getElementHeight("about")){
      this.updateStyle({
        targetedStyle: "waydirect-live-status",
        targetedWaydirect: 0
      });
      if(window.scrollY >= this.getElementHeight("competences")){
        this.updateStyle({
          targetedStyle: "waydirect-live-status",
          targetedWaydirect: 1
        });
        if(window.scrollY >= this.getElementHeight("projects")){
          this.updateStyle({
            targetedStyle: "waydirect-live-status",
            targetedWaydirect: 2
          });
          if(window.scrollY >= this.getElementHeight("contact")){
            this.updateStyle({
              targetedStyle: "waydirect-live-status",
              targetedWaydirect: 3
            });
          }
        }
      }
    }
  };

  //Function that handles UX given a target element
  wayfinderRouteTo = (targetedWaydirect) => {
    switch (targetedWaydirect) {
      case "about":
          this.updateScreenPosition("about");
          this.updateStyle({
            targetedStyle: "waydirect-live-status",
            targetedWaydirect: 0
          });
          break;
      case "competences":
        this.updateScreenPosition("competences");
        this.updateStyle({
          targetedStyle: "waydirect-live-status",
          targetedWaydirect: 1
        });
        break;

      case "projects":
        this.updateScreenPosition("projects");
        this.updateStyle({
          targetedStyle: "waydirect-live-status",
          targetedWaydirect: 2
        });
        break;
      case "contact":
        this.updateScreenPosition("contact");
        this.updateStyle({
          targetedStyle: "waydirect-live-status",
          targetedWaydirect: 3
        });
        break;
                
      default:
        break;
    }
  };
  render() {
    return (
      <nav className = "wayfinder">
        <ul className = "wayfinder__waypaths">
          <div id = "wayfinder-about" className = {`wayfinder__waydirect ${this.waydirectVisitStatus[0]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("about")}>
              About
            </li>
          </div>
          <div id = "wayfinder-competences" className = {`wayfinder__waydirect ${this.waydirectVisitStatus[1]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("competences")}>
              Competences
            </li>
          </div>
          <div className = "wayfinder__waysign">
            <li>
              eFrederick
            </li>
          </div>
          <div id = "wayfinder-projects" className = {`wayfinder__waydirect ${this.waydirectVisitStatus[2]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("projects")}>
              Projects
            </li>
          </div>
          <div id = "wayfinder-contact" className = {`wayfinder__waydirect ${this.waydirectVisitStatus[3]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("contact")}>
              Conctact
            </li>
          </div>
          <div className = "wayfinder__waypaths-bar" style = {this.state.wayfinderBarStyle}/>
        </ul>
        <div onClick={() => this.updateStyle({targetedStyle: "waydirect-visibility"})} className = "wayfinder__toggle"> 
          <div className = "wayfinder__hamburguer"/>
        </div>
      </nav>
    );
  }
}

export default Wayfinder;