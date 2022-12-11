import React, { Component } from "react";
import { Parent3, Parent4 } from "../../Repeat";
import ReadyButton from "./ReadyButton";
import ReadyText from "./ReadyText";


export default class ReadyFor extends Component {
    render() {
        return(
            <Parent3>
                <Parent4>
                    <ReadyText />
                <ReadyButton />
                </Parent4>
            </Parent3>
        )
    }
}
