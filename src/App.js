import React from 'react';
import './App.css';

const drumKeys = [
  {
    key:"Q",
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key:"W",
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  { 
    key:"E",
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key:"A",
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'}
    ,
  {
    key:"S",
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key:"D",
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key:"Z",
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key:"X",
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key:"C",
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lastAudio: ""
    }
  }

  playAudio(audioId, lastAudio){
    let drumSound = document.getElementById(audioId)
    this.setState({lastAudio:lastAudio})
    drumSound.play();
  }

  
  render (){
    
    let keys = drumKeys.map((e,i) => 
        <button id={e.id}  className="drum-pad" onClick = {()=>this.playAudio(e.key, e.id)} key = {i}>{e.key}
        <audio src={e.url} className="clip" id = {e.key}/></button>
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
