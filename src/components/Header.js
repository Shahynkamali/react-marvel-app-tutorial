import React from 'react';

import Filterbar from './Filterbar';


import './Header.scss';


function Header(props) {
	return(
		 <header className="Header__Component">
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          <Filterbar />
        </header>
	); 
};


export default Header;