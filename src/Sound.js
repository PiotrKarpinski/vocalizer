import React from 'react';
import './Sound.css';

class Sound extends React.Component {
	state = {
		play: false,
	}
	audio = new Audio("http://www.layzeebeats.vot.pl/static/media/sound/regret.mp3")
	
	componentDidMount() {

    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }


  togglePlay = () => {

    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });


  }


	render() {
	  return (
	    <div className='sound'>
	    	<button type='button' onClick={this.togglePlay} className='play'><i className='fa fa-volume-up'/></button>
	    </div>
	  );
	}
}

export default Sound;
