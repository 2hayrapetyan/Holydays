import React, { Component } from "react";
import { Button3, Button4, ButtonParent } from "../../Repeat";

export default class ReadyButton extends Component {
    render() {
        return(
            <ButtonParent>
            <Button3>Find gift now</Button3>
            <Button4>how it works</Button4>
            </ButtonParent>
        )
    }
}
