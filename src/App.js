import React, {Component} from 'react';
import './App.css';
import drumKeys from './drumData.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastAudio: " "
    }
  }
 
  playAudio = (audioId, lastAudio)=>{
    let drumSound = document.getElementById(audioId)
    this.setState({lastAudio:lastAudio})
    drumSound.play();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
 
  handleKeyPress = (e) => {
    let audioFound = drumKeys.find(x => x.keyCode == e.keyCode);
    if (audioFound){
      this.playAudio(audioFound.key, audioFound.id);
    }
  }

  render (){
     let keys = drumKeys.map((e,i) => 
        <button id={e.id}  className="drum-pad" onClick = {()=>this.playAudio(e.key, e.id)} key = {i}>{e.key}
          <audio src={e.url} className="clip" id = {e.key}/>
        </button>
     );
    return(
      <div id = "drum-machine">
        <div id = "keysWrapper">
          {keys}
        </div>
        <div id = "display">{this.state.lastAudio}</div>
      </div>
    )
  };
}
export default App;
