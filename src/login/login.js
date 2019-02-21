import React, { Component } from 'react'
import url  from  '../component/HostApi'
import img from '../img/user.png'


class Login extends Component {

    constructor(props){
        super(props)
            this.state={
               email:'',
               password:'',
               responseLogin:''
            }  
            
            this.send=this.send.bind(this)
    }
    
    send(e){
        
        e.preventDefault()
        console.log(this.state.password)

        fetch(`${url}/login/${this.state.email}=${this.state.password}`)
        .then(data=>data.json())
        .then(data=>{
            //console.log(data)
            if(data.message){
                console.log(data)
                this.setState({
                    responseLogin:data.message
                })
            }else{
                console.log(data)
                this.setState({
                    responseLogin:data.email[0].email
                }) 
                console.log(this.state.responseLogin)
            }
        })
    }

    
    onChange(e){
        e.preventDefault();
        
        this.setState({
            [e.target.name]:e.target.value
        })

        //console.log(JSON.stringify(this.state))
        //fetch(`${url}/login/`)  
    }

    render(){
        return(
            <div class="contenedo-login">
            <div className="login-box">
                <img src={img} className="avatar" alt="Avatar Image"></img>
                <h1>Ingrese aqui</h1>

                <form onSubmit={this.send}>
                    
                    <label htmlFor="email">Usuario</label>
                    <input value={this.state.email} onChange={this.onChange.bind(this)} name="email" id="email" type="email" placeholder="Enter Username"/>
                    
                    <label htmlFor="password">Contaseña</label>
                    <input value={this.state.password} onChange={this.onChange.bind(this)} name="password" id="password" type="password" placeholder="Enter Password"/>
                    <br></br>

                    <small id="emailHelp" className="form-text text-muted">{this.state.responseLogin?this.state.responseLogin:""}</small>

                    <button  id="send" name="send" type="submit" >Ingresar</button>
                    
                    <br></br>
                    <a href="#">Olvido su contraseña?</a>  <br></br>
                    <a href="#">No tiene una cuenta?</a>
                </form>
            </div>  
            </div>
        )
    }
}   

export default Login