
import React, { Component } from "react";
import { Parent5 } from "../../Repeat";
import BlogHeader from "./BlogHeader";
import Way from "./Way";




export default class Blog extends Component {


    render() {
        return(
       <Parent5>
        <BlogHeader />
        <Way />
       </Parent5>
        )
    }
}