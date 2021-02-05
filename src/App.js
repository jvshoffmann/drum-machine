import React from 'react';
import './App.css';

const drumKeys = [
  {key:"Q",
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {key:"W",
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {key:"E",
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {key:"A",
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  {key:"S"},
  {key:"D"},
  {key:"Z"},
  {key:"X"},
  {key:"C"}
]
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    let keys = drumKeys.map((e,i) => <div className = "drum-pad" key = {i}>{e.key}</div>);
    return(
      <div id = "drum-machine">
        <div id = "keysWrapper">
        {keys}
        </div>
        <div id = "display">display placeholder</div>
      </div>
    )
  };
}
export default App;
