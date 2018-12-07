import React from 'react';
import Filterbar from './Filterbar';


function Header(props) {
	return(
		 <header>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
          <Filterbar />
        </header>
	); 
};


export default Header;