import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom"
import logo from './logo.svg';
import './App.css';



import Navbar from './component/navbar'
import Login from './login/login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <header className="App-header">
            
            <Route exact path="/login" render={()=><Login onClickF={this.asignarUsuarioState}/>}/>
          
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
