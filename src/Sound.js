import React from 'react';
import './Sound.css';
import {letters} from './data/letters.json';





class Sound extends React.Component {


  handleClick = () => {

	if (this.props.text !== undefined) {
	const textArr = Array.from(this.props.text.toLowerCase())


	let filteredArray=[]



	for(let i=0; i < textArr.length; i++) {


		switch(textArr[i] + textArr[i+1]+textArr[i+2]) {
			case 'dzi':
			textArr[i] = 'dź'
			textArr.splice(i+1,2)
			
		}

		switch(textArr[i] + textArr[i+1]) {
			case 'si':
			textArr[i] = 'ś'
			textArr.splice(i+1,1)
			break;
			case 'ch':
			textArr[i] = 'h'
			textArr.splice(i+1,1)
			break;
			case 'ci':
			textArr[i] = 'ć'
			textArr.splice(i+1,1)
			break;
			case 'sz':
			textArr[i] = 'sz'
			textArr.splice(i+1,1)
			break;
			case 'cz':
			textArr[i] = 'cz'
			textArr.splice(i+1,1)
			break;
			case 'rz':
			textArr[i] = 'ż'
			textArr.splice(i+1,1)
			break;
			case 'zi':
			textArr[i] = 'ź'
			textArr.splice(i+1,1)
			break;
			case 'ni':
			textArr[i] = 'ń'
			textArr[i+1] = 'i'
		
			break;
			case 'dź':
			textArr[i] = 'dź'
			textArr.splice(i+1,1)
			break;	

		}

		for(let obj of letters) {
				if (textArr[i] === obj.letter) {
				filteredArray.push(obj.url)
			}		
		}

	}


	

	filteredArray.sort(function(a, b){  
  		return textArr.indexOf(a) - textArr.indexOf(b);
	});

	
	if (filteredArray.length > 0) {
	this.playSentence(filteredArray)
	} else { alert('Wpisano nieodpowiedni znak')}
  }
}  

  playSentence = (filteredArray) => {

	var audio = new Audio(),
		    i = 0;
  		
		audio.addEventListener('ended', function () {
		    i++
		    if (i<filteredArray.length) {		    
		    audio.src = filteredArray[i];
		    audio.play();}

		}, true)
		audio.defaultPlaybackRate = 0.85;
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
