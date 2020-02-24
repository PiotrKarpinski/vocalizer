import React from 'react';
import './Header.css';
import Text from './Text.js';

function Header() {
  return (
    <header>
    <h1>Wokalizer</h1>
    <h2>by Piotr Karpiński</h2>
    	<div className='container'>
    		<Text />
    	</div>
    </header>
  );
}

export default Header;
