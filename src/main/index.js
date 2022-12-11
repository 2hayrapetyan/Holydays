import React, { Component } from "react";
import Blog from "./blog";
import FindGift from "./find";
import Holydays from "./holydays";
import Ready from "./ready";
import Work from "./work";



export default class Main extends Component {


    render() {
        return(
            <main>
                <FindGift />
                <Work />
                <Holydays />
                <Ready />
                <Blog />
            </main>
        )
    }
}