import React from 'react';
import './App.css';

const drumKeys = [
  {
    key:"Q",
    keyCode: 81,
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key:"W",
    keyCode: 87,
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  { 
    key:"E",
    keyCode: 69,
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key:"A",
    keyCode: 65,
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'}
    ,
  {
    key:"S",
    keyCode: 83,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key:"D",
    keyCode: 68,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key:"Z",
    keyCode: 90,
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key:"X",
    keyCode: 88,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key:"C",
    keyCode: 67,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

const simulateClickOrder = ['mousedown', 'mouseup'];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lastAudio: ""
    }
    this.playAudio = this.playAudio.bind(this);
  }
 
  playAudio(audioId, lastAudio){
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
