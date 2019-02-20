import React, { Component } from 'react'

class Products extends Component{
    constructor(props){
        super(props)
            this.state={
                products:''
            }
    }

    render(){
        return(
            <h1>Products store</h1>
        )
    }

}

export default Products