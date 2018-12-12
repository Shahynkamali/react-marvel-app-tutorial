import React, { Component } from 'react';
import './Filterbar.scss';

class Filterbar extends Component{
   constructor(props) {
        super(props);
        this.state = {
            searchQuery: " "
        }       
    }
  handleInputChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  handleFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onFilterSubmit(this.state.searchQuery);
    
  }
 
	render(){
		return (
			<div className="FilterBar__Component">
            <form onSubmit={this.handleFormSubmit}>
              <label className="visually-hidden" htmlFor="search">
                Search Characters:
              </label>
              <input onChange={this.handleInputChange} type="text" placeholder="Search characters" id="search" value={this.state.searchQuery}/>
              <button type="submit">Submit</button>
            </form>
        </div>
        );
	}

}


export default Filterbar;