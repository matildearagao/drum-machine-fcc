import React, { Component } from 'react';
import './App.css';
import DrumPad from './DrumPad';


const data = [
  { id: 'Arabic', letter: 'Q', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%202/36[kb]arabicperc2-1.wav.mp3' },
  { id: 'Snare', letter: 'W', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/606%20drumkit/21[kb]snare1.aif.mp3' },
  { id: 'Nylon', letter: 'E', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Nylon%20Hit%20Kit/456[kb]NylonHit-11.wav.mp3' },
  { id: 'Hard Tabla', letter: 'A', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Hard%20Tabla/214[kb]hardtabla-Thap.wav.mp3' },
  { id: 'Mokushu', letter: 'S', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Japanese%20Drums/10[kb]mokusho-A1.wav.mp3' },
  { id: 'Breath', letter: 'D', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Female%20Vox%20Beatbox%20Kit/40[kb]voxy-BREATH.WAV.mp3' },
  { id: 'Yuh', letter: 'Z', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Female%20Vox%20Beatbox%20Kit/15[kb]voxy-LODOO.WAV.mp3' },
  { id: 'Tom', letter: 'X', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Female%20Vox%20Beatbox%20Kit/47[kb]voxy-TOM1.WAV.mp3' },
  { id: 'Crash', letter: 'C', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/M%20Soul%20Drumset/163[kb]Crashclassic.wav.mp3' },
]



class App extends Component {

  state = {
    display: 'Play Drums'
  }

  handleDisplay = (display) => {
    this.setState({ display })
  }

  render() {
    return (

      <div id="drum-machine" style={drumMachineStyle}>
        <div id="display" style={displayStyle}>{this.state.display}</div>
        {data.map(item => (
          <DrumPad id={item.id} key={item.id} letter={item.letter} src={item.src} onClick={this.handleClick} handleDisplay={this.handleDisplay} style={{ margin: '0 auto' }} />
        ))}

      </div>

    );
  }
}

const drumMachineStyle = {
  margin: '50px auto',
  width: 600,
  padding: '50px',
  background: 'gainsboro',
  borderRadius: '5px',
}

const displayStyle = {
   textAlign: 'center',
    marginBottom: '30px', 
    fontSize: '30px', 
    fontWeight: '600', 
    color: 'grey' 
  }



export default App;
