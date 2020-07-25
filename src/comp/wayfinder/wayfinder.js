import React, {Component} from 'react';
import './wayfinder.scss';

class Wayfinder extends Component { 
  currentPage = ['','','','']
  constructor(props) {
    super(props);
    this.state = {
      wayfinderProgress: "0%",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.wayfinderBarProgress);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.wayfinderBarProgress);
  }
  calcProgression = () => {
    const scrollPy = window.scrollY;
    const winHeightPy = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return((scrollPy / winHeightPy) * 100);
  };
  setProgression = () => {
    this.setState({
      wayfinderProgress: `${this.calcProgression()}%`
    });
  };
  setManualProgression = (percentage) => {
    this.setState({
      wayfinderProgress: `${percentage}%`
    });
  };
  wayfinderBarProgress = () => {
    if(this.state.wayfinderProgress !== this.setProgression()){
      this.setManualProgression(this.setProgression())
    }
    if(this.calcProgression() >= 1){
      this.setWaydirect(0);
      if(this.calcProgression() >= 15){
        this.setWaydirect(1);
        if(this.calcProgression() >= 72){
          this.setWaydirect(2);
          if(this.calcProgression() >= 89){
            this.setWaydirect(3);
          }
        }
      }
    }
    if(this.calcProgression() <= 0.99){
      this.currentPage[0] = '--deactivated'
    }
  };
  setWaydirect = (targetedWaydirect) => {
    for(let i = 0; i <= targetedWaydirect; i++){
      this.currentPage[i] = '--activated'
    }
    let maxWaydirect = this.currentPage.length--
    for(let i = maxWaydirect; i > targetedWaydirect; i--){
      this.currentPage[i] = '--deactivated'
    }
  };
  wayfinderGoToAbout = () => {
    this.setWaydirect(0);
    this.setManualProgression(0)
  };
  wayfinderGoToCompetences = () => {
    this.setWaydirect(1);
    this.setManualProgression(15)
  };
  wayfinderGoToProjects = () => {
    this.setWaydirect(2);
    this.setManualProgression(72)
  };
  wayfinderGoToContact = () => {
    this.setWaydirect(3);
    this.setManualProgression(89)
  };
  render() {
    let wayfinderBarStyle
    if(document.documentElement.clientWidth >= 801){
      wayfinderBarStyle = {
        width: this.state.wayfinderProgress,
        transitionProperty: "width",
        transitionDuration: "100ms",
        position: "absolute",
        borderTop: ".5vh solid #22d1ee"
      }
    }else{
      wayfinderBarStyle = {
        display: "hidden",
      }
    }
    return (
      <nav className = "wayfinder">
        <ul className = "wayfinder__waypaths">
          <div id = "about" className = {`wayfinder__waydirect ${this.currentPage[0]}`}>
            <li onClick={this.wayfinderGoToAbout}>
              About
            </li>
          </div>
          <div id = "wayfinder-competences" className = {`wayfinder__waydirect ${this.currentPage[1]}`}>
            <li onClick={this.wayfinderGoToCompetences}>
              Competences
            </li>
          </div>
          <div className = "wayfinder__waysign">
            <li>
              eFrederick
            </li>
          </div>
          <div id = "wayfinder-projects" className = {`wayfinder__waydirect ${this.currentPage[2]}`}>
            <li onClick={this.wayfinderGoToProjects}>
              Projects
            </li>
          </div>
          <div id = "wayfinder-contact" className = {`wayfinder__waydirect ${this.currentPage[3]}`}>
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
