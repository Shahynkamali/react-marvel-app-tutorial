import React, { Component } from 'react';

import './Filterbar.scss';

class Filterbar extends Component{
	render(){
		return (
			<div className="FilterBar__Component">
            <form>
              <label className="visually-hidden" htmlFor="search">
                Search Characters:
              </label>
              <input type="text" placeholder="Search characters" id="search"/>
              <button type="submit">Submit</button>
            </form>
        </div>
        );
	}
}

export default Filterbar;