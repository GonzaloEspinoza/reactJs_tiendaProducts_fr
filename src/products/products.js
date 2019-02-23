import React, { Component } from 'react'
import url from '../component/HostApi'
import AgregarAlCarrito from './AgregarAlCarrito'
import img from '../img/mouse.png'

class Products extends Component{
    constructor(props){
        super(props)
            this.state={
                products:[]
            }
    }

    componentWillMount(){
        const Url=`${url}/products`
        
        fetch(Url)
        .then(data=>data.json())
        .then(data=>{
            //console.log(data)
            this.setState({
                products:data
            })

        })
    }


//     <div class="card border-primary mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body text-primary">
//     <h5 class="card-title">Primary card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>

    render(){
        console.log(this.state)
        return(
        
            <div className="productsContenedor"> 
                <div className="p-3 mb-2 S text-white"></div>
                
                <div className="producto">
                <div className="row">
                       
                {  this.state.products.map((u)=>{
                            return (
                               
                                        <div className="col-md-4">
                                        <div className="contenedor">
                                            <img id="imgp"src={img} alt="..." className="img-thumbnail imagen"></img>  
                                        </div>
                                            <div className="producto">
                                                <h4 className="card-title">{u.name}</h4>
                                                <h6 className="description  " >{u.description}</h6>
                                                <h2>{u.price}Bs</h2>
                                                <div ><AgregarAlCarrito u={u}/></div>
                                                <br></br>
                                            </div>  
                                        </div>
                            )
                        })
                }

                </div>
                </div>
            </div>
        )
    }

}

export default Products