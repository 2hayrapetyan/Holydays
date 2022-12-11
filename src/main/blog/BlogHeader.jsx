import React, { Component } from "react";
import { TextBlockP } from "../../Repeat";

export default class BlogHeader extends Component {
    render() {
        return(
         <div>
            <h2 className="h22" style={{margin:'0',padding:'0'}}>Our Best Blogs Ever</h2>
            <TextBlockP style={{fontSize:'1.25vw'}}>“Try our blog to find the best tips and tricks to select your gift”</TextBlockP>
         </div>  
        )
    }
}