import React, { Component } from "react";
import way from "./way.png"

export default class Way extends Component {
    render() {
        return(
        <div style={{display:'flex',width:'100%',alignItems:'center',background:'#231F20'}}>
            <div>
            <img src={way} alt='' style={{minHeight:'475px'}}/>
            </div> 

           <div style={{display:'flex',flexDirection:'column',textAlign:'start',marginLeft:'80px'}}>
            
           <p style={{color:'white',fontSize:'0.972vw'}}>Mr. John Dohe</p>
                <span style={{fontSize:'3.333vw',color:'white',width:'40%',margin:"27px 0"}}>The best way to wish your wife</span>
                
                <p style={{color:'white',fontSize:"1.25vw"}}>Read more</p>
       
           </div>
           
            </div>
        )
    }
}