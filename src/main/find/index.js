import React, { Component } from "react";
import { Parent } from "../../Repeat";
import FindImg from "./FindImg";
import FindText from "./FindText";

export default class FindGift extends Component {
    render() {
        return(
            <Parent>
                <FindText />
                <FindImg />
                
            </Parent>
        )
    }
}