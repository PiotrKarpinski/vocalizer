import React from 'react';
import './Text.css';
import Sound from './Sound.js';



class Text extends React.Component {




    constructor() {
        super();
        this.state = {
          placeholder:'Type some sentence here',
        };


    this.handleChange = (e) => {
    	this.setState({placeholder: e.target.value})
    }
    }


    render() {    




        return (
            <div className='box'>
            	<div className='text'>
                <input onChange={this.handleChange} placeholder='Type some sentence here' />
                </div>
            	<Sound text={this.state.placeholder}/>     
            </div>
        );
    }
}


export default Text;
