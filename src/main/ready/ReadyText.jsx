import React, { Component } from "react";
import { TextParent } from "../../Repeat";
;

export default class ReadyText extends Component {
    render() {
        return(
            
          <TextParent>
            <h2 className="h22" style={{margin:'0',fontWeight:'900'}}>Ready to get started?</h2>
            <h2 className="h22" style={{margin:'0',fontWeight:'100'}}>Sign up or contact us</h2>
          </TextParent>
        )
    }
}
