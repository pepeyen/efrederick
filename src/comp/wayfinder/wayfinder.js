import React, {Component} from 'react';

//Styles
import './wayfinder.scss';

class Wayfinder extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      pageLanguage: this.props.pageLanguage,
      pageText : this.languageLibrary.en_us,
      deviceWidth: 0,
      deviceHeight: 0,
      wayfinderBarStyle: { },
      wayfinderProgress: "0%",
      isWaydirectsHidden: true
    };
  }
  waydirectLiveStatus = ['','','','']
  waydirectVisibilityStatus = '--hidden'
  languageLibrary = {
    en_us: [
        "About",
        "Competencies",
        "Projects",
        "Contact"
    ],
    pt_br: [
      "Sobre",
      "Competências",
      "Projetos",
      "Contato"
    ]
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.wayfinderBarProgress);
    
    if(document.documentElement.clientWidth >= 784){
      this.setState({
        width: window.innerWidth, 
        height: window.innerHeight,
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
  }

  componentDidUpdate(prevProps){
    if(prevProps.pageLanguage !== this.props.pageLanguage){
      this.updatePageLanguage()
    }
  };

  updatePageLanguage = () => {
    switch (this.props.pageLanguage) {
      case "en_us":
        this.setState({pageText : this.languageLibrary.en_us})
        break;
    
      case "pt_br":
        this.setState({pageText : this.languageLibrary.pt_br})
        break;
        
      default:
        break;
    }
  };

  //Function to update the state with the current window width and height
  updateDimensions = () => {
    if(document.documentElement.clientWidth >= 784){
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      this.setState({
        isWaydirectsHidden: true
      })
      this.updateWaydirectState({targetedState: "waydirect-visibility"})
    }
  };

  //Function that handles the overwall webapp inline styling
  updateWaydirectState = ({targetedState, targetedWaydirect}) => {
    switch (targetedState) {
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
          this.waydirectLiveStatus[i] = '--visited'
        }
        let waydirectMaxRange = this.waydirectLiveStatus.length--

        for(let i = waydirectMaxRange; i > targetedWaydirect; i--){
          this.waydirectLiveStatus[i] = '--unvisited'
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
  getElementPosition = (elementId) => {
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
      top: this.getElementPosition(targetedWaydirect),
      left: 0,
      behavior: 'smooth'
    });
  };

  //Function that updates the progress bar styling
  wayfinderBarProgress = () => {
    this.setState({
      wayfinderProgress: `${this.getScrollPercentage(window.scrollY)}%`
    });
    if(window.scrollY >= this.getElementPosition("about")){
      this.updateWaydirectState({
        targetedState: "waydirect-live-status",
        targetedWaydirect: 0
      });
      if(window.scrollY >= this.getElementPosition("competencies")){
        this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 1
        });
        if(window.scrollY >= this.getElementPosition("projects")){
          this.updateWaydirectState({
            targetedState: "waydirect-live-status",
            targetedWaydirect: 2
          });
          if(window.scrollY >= this.getElementPosition("contact")){
            this.updateWaydirectState({
              targetedState: "waydirect-live-status",
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
          this.updateWaydirectState({
            targetedState: "waydirect-live-status",
            targetedWaydirect: 0
          });
          break;
      case "competencies":
        this.updateScreenPosition("competencies");
        this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 1
        });
        break;

      case "projects":
        this.updateScreenPosition("projects");
        this.updateWaydirectState({
          targetedState: "waydirect-live-status",
          targetedWaydirect: 2
        });
        break;
      case "contact":
        this.updateScreenPosition("contact");
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
      <nav className = "wayfinder">
        <ul className = "wayfinder__waypaths">
          <div id = "wayfinder-about" className = {`wayfinder__waydirect ${this.waydirectLiveStatus[0]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("about")}>{this.state.pageText[0]}</li>
          </div>
          <div id = "wayfinder-competencies" className = {`wayfinder__waydirect ${this.waydirectLiveStatus[1]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("competencies")}>{this.state.pageText[1]}</li>
          </div>
          <div className = "wayfinder__waysign">
            <li>eFrederick</li>
          </div>
          <div id = "wayfinder-projects" className = {`wayfinder__waydirect ${this.waydirectLiveStatus[2]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("projects")}>{this.state.pageText[2]}</li>
          </div>
          <div id = "wayfinder-contact" className = {`wayfinder__waydirect ${this.waydirectLiveStatus[3]} ${this.waydirectVisibilityStatus}`}>
            <li onClick={() => this.wayfinderRouteTo("contact")}>{this.state.pageText[3]}</li>
          </div>
          <div className = "wayfinder__waypaths-bar" style = {this.state.wayfinderBarStyle}/>
        </ul>
        <div onClick={() => this.updateWaydirectState({targetedState: "waydirect-visibility"})} className = "wayfinder__toggle"> 
          <div className = "wayfinder__hamburguer"/>
        </div>
      </nav>
    );
  }
}

export default Wayfinder;