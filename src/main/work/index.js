import React, { Component } from "react";
import { Parent } from "../../Repeat";
import WorkImg from "./WorkImg";
import WorkText from "./WorkText";

export default class Work extends Component {
    render() {
        return(
            <Parent>
<WorkImg />
<WorkText />
            </Parent>
        )
    }
}