import React, { Component } from 'react'
import Url from '../component/HostApi'


class AgregarAlCarrito extends  Component{
    constructor(props){
        super(props)
        
            this.state={
                products:this.props.u
            }
    }

    agregarCarrito(e){
        //console.log(this.props.u)
        

        const id_user="5c6c922cd034131acc9e611b"
        const venta={
            id_user:id_user,
            id_product:this.state.products.id
        }
        console.log(venta)

        var url=`${Url}/anadircompra`,
            params={
                method:'POST',
                body:JSON.stringify(venta),
                headers:{
                    'Content-type':'application/json'
                }
            }


            fetch(url,params).then()

    }

    render(){
        return(
            <div>
                <button onClick={this.agregarCarrito.bind(this)} type="button" className="btn btn-primary" >Agregar al carrito</button> 
            </div>
        )
    }
} 


export default AgregarAlCarrito