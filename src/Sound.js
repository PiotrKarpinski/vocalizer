import React from 'react';
import './Sound.css';
import {letters} from './data/letters.json';

class Sound extends React.Component {
	state = {
		play: false,
	}

	
	

	



  togglePlay = () => {

    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });


  }

  playSentence = () => {

	var audio = new Audio(),
		    i = 0;
		var playlist = new Array(letters);
  	console.log(letters)
  		
		audio.addEventListener('ended', function () {
		    i++
		    console.log(letters[i])
		    if (i<letters.length) {		    
		    audio.src = letters[i].url;
		    audio.play();}

		}, true)
		audio.volume = 0.3;
		audio.loop = false;
		audio.src = letters[0].url;
		audio.play();
		


	}  	
  


	render() {




	  return (
	    <div className='sound'>
	    	<button type='button' onClick={this.playSentence} className='play'><i className='fa fa-volume-up'/></button>
	    </div>
	  );
	}
}

export default Sound;
