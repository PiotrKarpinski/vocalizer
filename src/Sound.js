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

  handleClick = () => {

	if (this.props.text !== undefined) {
	const textArr = Array.from(this.props.text)
	console.log(textArr)

	console.log(letters)

	let filteredArray=[]



	for(let lett of textArr) {
		console.log(lett)
		for(let obj of letters) {
				if (lett === obj.letter) {
					console.log(obj.letter)
				filteredArray.push(obj.url)
			}		
		}

	}
	

	filteredArray.sort(function(a, b){  
  		return textArr.indexOf(a) - textArr.indexOf(b);
	});

	
	console.log(filteredArray)
	this.playSentence(filteredArray)
  }
}  

  playSentence = (filteredArray) => {

	var audio = new Audio(),
		    i = 0;
		var playlist = new Array(filteredArray);
  		
		audio.addEventListener('ended', function () {
		    i++
		    if (i<filteredArray.length) {		    
		    audio.src = filteredArray[i];
		    audio.play();}

		}, true)
		audio.volume = 0.3;
		audio.loop = false;
		audio.src = filteredArray[0];
		audio.play();
		


	}  	
  


	render() {


	  return (
	    <div className='sound'>
	    	<button type='button' onClick={this.handleClick} className='play'><i className='fa fa-volume-up'/></button>
	    </div>
	  );
	}
}

export default Sound;
