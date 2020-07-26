import React, {Component} from 'react';
import './wayfinder.scss';

class Wayfinder extends Component { 
  waydirectStatusList = ['','','','']
  waydirectMobileStatusList = ['--hidden','--hidden','--hidden','--hidden']
  constructor(props) {
    super(props);
    this.state = {
      wayfinderProgress: "0%",
      isWaydirectsHidden: true
    };
    if(document.documentElement.clientWidth >= 801){
      this.waydirectMobileStatusList = ['','','','']
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.wayfinderBarProgress);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.wayfinderBarProgress);
  }
  getElementPercentage = (elementBaseHeight) => {
    let pageTotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    return((elementBaseHeight / pageTotalHeight) * 100);
  }
  getElementHeight = (elementId) => {
    let element = document.getElementById(elementId)
    let wayfinderCurrentHeight
    if(document.documentElement.clientWidth >= 801){
      wayfinderCurrentHeight = (((Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 16))) / 100
    } else wayfinderCurrentHeight = 14 * 16

    let waydirectCoordinate = ((element.offsetTop - element.scrollTop) - wayfinderCurrentHeight);

    return waydirectCoordinate
  }
  wayfinderBarProgress = () => {
    this.setState({
      wayfinderProgress: `${this.getElementPercentage(window.scrollY)}%`
    });
    if(this.getElementPercentage(window.scrollY) >= this.getElementPercentage(this.getElementHeight("about"))){
      this.updateWaydirectProgress(0);
      if(this.getElementPercentage(window.scrollY) >= this.getElementPercentage(this.getElementHeight("competences"))){
        this.updateWaydirectProgress(1);
        if(this.getElementPercentage(window.scrollY) >= this.getElementPercentage(this.getElementHeight("projects"))){
          this.updateWaydirectProgress(2);
          if(this.getElementPercentage(window.scrollY) >= this.getElementPercentage(this.getElementHeight("contact"))){
            this.updateWaydirectProgress(3);
          }
        }
      }
    }
    if(this.getElementPercentage(window.scrollY) <= 0.99){
      this.waydirectStatusList[0] = '--deactivated'
    }
  };
  updateWaydirectProgress = (targetedWaydirect) => {
    for(let i = 0; i <= targetedWaydirect; i++){
      this.waydirectStatusList[i] = '--activated'
    }

    let maxWaydirect = this.waydirectStatusList.length--

    for(let i = maxWaydirect; i > targetedWaydirect; i--){
      this.waydirectStatusList[i] = '--deactivated'
    }
  };
  getWaydirectCoordinates = (targetedWaydirect) => {
    window.scrollTo({
      top: this.getElementHeight(targetedWaydirect),
      left: 0,
      behavior: 'smooth'
    });
  }
  hideWaydirects = () => {
    if(this.state.isWaydirectsHidden === false){
      for(let i = 0; i < 4; i++){
        this.waydirectMobileStatusList[i] = '--hidden'
      }
      this.setState({ isWaydirectsHidden: true })
    }else{
      for(let i = 0; i < 4; i++){
        this.waydirectMobileStatusList[i] = ''
      }
      this.setState({ isWaydirectsHidden: false })
    }
  }
  wayfinderGoToAbout = () => {
    this.getWaydirectCoordinates("about");
    this.updateWaydirectProgress(0);
  };
  wayfinderGoToCompetences = () => {
    this.getWaydirectCoordinates("competences");
    this.updateWaydirectProgress(1);
  };
  wayfinderGoToProjects = () => {
    this.getWaydirectCoordinates("projects");
    this.updateWaydirectProgress(2);
  };
  wayfinderGoToContact = () => {
    this.getWaydirectCoordinates("contact");
    this.updateWaydirectProgress(3);
  };
  render() {
    let wayfinderBarStyle
    let wayfinderToggleStyle
    
    if(document.documentElement.clientWidth >= 801){
      wayfinderToggleStyle = {
        display : "none"
      }
      wayfinderBarStyle = {
        width: this.state.wayfinderProgress,
        transitionProperty : "width",
        transitionDuration : "2ms",
        position : "absolute",
        borderTop : ".5vh solid #22d1ee"
      }
    }else{
      wayfinderToggleStyle = {
        display : "block"
      }
      wayfinderBarStyle = {
        display: "none"
      }
    }
    return (
      <nav className = "wayfinder">
        <ul className = "wayfinder__waypaths">
          <div id = "wayfinder-about" className = {`wayfinder__waydirect ${this.waydirectStatusList[0]} ${this.waydirectMobileStatusList[0]}`}>
            <li onClick={this.wayfinderGoToAbout}>
              About
            </li>
          </div>
          <div id = "wayfinder-competences" className = {`wayfinder__waydirect ${this.waydirectStatusList[1]} ${this.waydirectMobileStatusList[1]}`}>
            <li onClick={this.wayfinderGoToCompetences}>
              Competences
            </li>
          </div>
          <div className = "wayfinder__waysign">
            <li>
              eFrederick
            </li>
          </div>
          <div id = "wayfinder-projects" className = {`wayfinder__waydirect ${this.waydirectStatusList[2]} ${this.waydirectMobileStatusList[2]}`}>
            <li onClick={this.wayfinderGoToProjects}>
              Projects
            </li>
          </div>
          <div id = "wayfinder-contact" className = {`wayfinder__waydirect ${this.waydirectStatusList[3]} ${this.waydirectMobileStatusList[3]}`}>
            <li onClick={this.wayfinderGoToContact}>
              Conctact
            </li>
          </div>
          <div className = "wayfinder__waypaths-bar" style = {wayfinderBarStyle}/>
        </ul>
        <div onClick={this.hideWaydirects}  className = "wayfinder__toggle" style = {wayfinderToggleStyle}> 
          <div className = "wayfinder__hamburguer"/>
        </div>
      </nav>
    );
  }
}

export default Wayfinder;