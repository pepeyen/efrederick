import React, {Component} from 'react';
import './wayfinder.scss';

class Wayfinder extends Component { 
  currentPage = ['','','','']
  constructor(props) {
    super(props);
    this.state = {
      wayfinderProgress: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.wayfinderBarProgress);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.wayfinderBarProgress);
  }
  setProgression = () => {
    const scrollPx = window.scrollY;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    return(scrollPx / winHeightPx * 100);
  }
  setManualProgression = (percentage) => {
    this.setState({
      wayfinderProgress: `${percentage}%`
    });
  }
  wayfinderBarProgress = () => {
    if(this.state.wayfinderProgress !== this.setProgression()){
      this.setManualProgression(this.setProgression())
    }
    if(this.setProgression() >= 1){
      this.setWaydirect(0);
      if(this.setProgression() >= 15){
        this.setWaydirect(1);
        if(this.setProgression() >= 70){
          this.setWaydirect(2);
          if(this.setProgression() >= 88){
            this.setWaydirect(3);
          }
        }
      }
    }
    if(this.setProgression() < 1){
      this.currentPage[0] = '--deactivated'
    }
  };
  setWaydirect = (targetedWaydirect) => {
    for(let i = 0; i <= targetedWaydirect; i++){
      this.currentPage[i] = '--activated'
    }
    for(let i = 3; i > targetedWaydirect; i--){
      this.currentPage[i] = '--deactivated'
    }
  }
  wayfinderGoToAbout = () => {
    this.setWaydirect(0);
    this.setManualProgression(8)
  }
  wayfinderGoToCompetences = () => {
    this.setWaydirect(1);
    this.setManualProgression(31.5)
  }
  wayfinderGoToProjects = () => {
    this.setWaydirect(2);
    this.setManualProgression(83)
  }
  wayfinderGoToContact = () => {
    this.setWaydirect(3);
    this.setManualProgression(100)
  }
  render() {
    const wayfinderBarStyle = {
      width: this.state.wayfinderProgress,
      transitionProperty: "width",
      transitionDuration: "100ms",
      position: "absolute",
      borderTop: ".5vh solid",
      borderColor: "#22d1ee"
    }
    return (
      <nav className = "wayfinder">
        <ul className = "wayfinder__waypaths">
          <div id = "about" className = {`wayfinder__waydirect ${this.currentPage[0]}`}>
            <li onClick={this.wayfinderGoToAbout}>
              About
            </li>
          </div>
          <div id = "competences" className = {`wayfinder__waydirect ${this.currentPage[1]}`}>
            <li onClick={this.wayfinderGoToCompetences}>
              Competences
            </li>
          </div>
          <div className = "wayfinder__waysign">
            <li>
              eFrederick
            </li>
          </div>
          <div id = "projects" className = {`wayfinder__waydirect ${this.currentPage[2]}`}>
            <li onClick={this.wayfinderGoToProjects}>
              Projects
            </li>
          </div>
          <div id = "contact" className = {`wayfinder__waydirect ${this.currentPage[3]}`}>
            <li onClick={this.wayfinderGoToContact}>
              Conctact
            </li>
          </div>
          <div className = "wayfinder__waypaths-bar" style = {wayfinderBarStyle}/>
        </ul>
      </nav>
    );
  }
}

export default Wayfinder;
