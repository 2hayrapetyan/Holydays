import React, { Component } from "react";
import { Button, TextBlockP } from "../../Repeat";

export default class HolydaysImg extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            id:1
        }
    }
    componentDidMount() {
        fetch('https://retoolapi.dev/3aP0rG/holidays')
        .then(res => res.json())
        .then(result => this.setState({data:result}))
    }
    
    
    render() {
        return(
            <div className="cardparent">
            <div className="numberparent">
{[...Array(4)].map((item,index) => (
    <span onClick={()=>this.setState({id:index+1})} 
    className={index+1===this.state.id ? 'active' : undefined } 
    key={index}>0{index+1}
    </span>
))}
</div>


{this.state.data.map(item=>(
                        item.id===this.state.id ? (
                        <div key={item.id} >
                            <img src={item.img} alt="" className='card'/>
                            <TextBlockP>{item.name}</TextBlockP>
                            <Button>See More </Button>
                        </div>) : null
                    ))} 
            </div>
            

               
        )
    }
}