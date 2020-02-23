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
	const textArr = Array.from(this.props.text.toLowerCase())
	console.log(textArr)

	console.log(letters)

	let filteredArray=[]



	for(let i=0; i < textArr.length; i++) {
		console.log(textArr[i],textArr[i+1])

		switch(textArr[i] + textArr[i+1]) {
			case 'si':
			console.log('test')
			textArr[i] = 'ś'
			textArr.splice(i+1,1)
			break;
			case 'ch':
			console.log('test')
			textArr[i] = 'h'
			textArr.splice(i+1,1)
			break;
			case 'ci':
			console.log('test')
			textArr[i] = 'ć'
			textArr.splice(i+1,1)
			break;
			case 'sz':
			console.log('test')
			textArr[i] = 'sz'
			textArr.splice(i+1,1)
			break;
			case 'cz':
			console.log('cz')
			textArr[i] = 'cz'
			textArr.splice(i+1,1)
			break;
			case 'rz':
			console.log('test')
			textArr[i] = 'ż'
			textArr.splice(i+1,1)
			break;
			case 'zi':
			console.log('test')
			textArr[i] = 'ź'
			textArr.splice(i+1,1)
			break;
			case 'ni':
			console.log('test')
			textArr[i] = 'ń'
			textArr[i] = 'i'
		
			break;


		}
		console.log(textArr)

		for(let obj of letters) {
				if (textArr[i] === obj.letter) {
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
		audio.defaultPlaybackRate = 2;
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
