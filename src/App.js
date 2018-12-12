import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.scss';

class App extends Component{
	constructor(props){
		super(props);

		this.state={};
	}
	onFilterSubmit = (searchQuery) =>{
		console.log(searchQuery);
	}

  render() {
    return (
      <div className="App__Component">
       <Header title="Marvel Comic explorer" message="Search and explore your favorite Marvel characters!"
       onFilterSubmit={this.onFilterSubmit}/>
       <Footer />
      </div>
    );
  }
}

export default App;

