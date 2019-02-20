import React, { Component } from 'react'

class Login extends Component {

    constructor(props){
        super(props)
            this.state={
               user:'' 
            }   
    }

    render(){
        return(
            <h1>User Login</h1>
        )
    }
}

export default Login