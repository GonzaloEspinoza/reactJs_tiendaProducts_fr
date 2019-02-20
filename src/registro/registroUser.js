import React, {Component} from 'react'

class RegistroUser extends Component{

    constructor(props){
        super(props)
            this.state={
                newUser:''
            }
    }

    render(){
        return(
            <h1>Register New User</h1>
        )
    }
}

export default RegistroUser