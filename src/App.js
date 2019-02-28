import React, { Component } from 'react';
import NavbarExample from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Get from './components/Get'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<div className="App">
				<NavbarExample/>
				<Route path='/home' component={Home}/>
				<Route path='/Get' component={Get}/>
				<Route path='/post' component={Post}/>
			</div>
		</BrowserRouter>
    );
  }
}

export default App;
