import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom"
import './login/login.css'
import './App.css';


import Navbar from './component/navbar'
import Login from './login/login'
import Products from './products/products'
import RegistroUser from './registro/registroUser'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <header className="App-header">
            
            <Route exact path="/" render={()=><Login onClickF={this.asignarUsuarioState}/>}/>

            <Route exact path="/products" render={()=><Products onClickF={this.asignarUsuarioState}/>}/>

            <Route exact path="/registro" render={()=><RegistroUser onClickF={this.asignarUsuarioState}/>}/>
          
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
