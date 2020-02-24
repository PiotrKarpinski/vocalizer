import React from 'react';
import './Text.css';
import Sound from './Sound.js';



class Text extends React.Component {




    constructor() {
        super();
        this.state = {
          placeholder:'Witaj świecie',
        };


    this.handleChange = (e) => {
    	this.setState({placeholder: e.target.value})
    }
    }


    render() {    




        return (
            <div className='box'>
                <input onChange={this.handleChange} placeholder={this.state.placeholder} />
            	<Sound text={this.state.placeholder}/>     
            </div>
        );
    }
}


export default Text;
