import React from 'react';
import './Header.css';
import Text from './Text.js';
import Sound from './Sound.js';

function Header() {
  return (
    <header>
    	<div className='container'>
    		<Text />
    		<Sound />
    	</div>
    </header>
  );
}

export default Header;
