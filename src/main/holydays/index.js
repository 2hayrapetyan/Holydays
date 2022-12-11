import React, { Component } from "react";
import { Parent2 } from "../../Repeat";
import HolydaysImg from "./HolydaysImg";
import HolydaysText from "./HolydaysText";


export default class Holydays extends Component {
    render() {
        return(
            <Parent2>
<HolydaysText />
<HolydaysImg />
            </Parent2>
          
        )
    }
} 