import React, { Component } from "react";
import styles from "./Header.module.css"
import Logo from "./Logo";
import Nav from "./Nav";
import Btn from "./Btn";
export default class Header extends Component {
    render() {
         return(
            <header>
                <div className={styles.parent}>
                    <Logo />
                    <Nav />
                    <Btn />
                </div>

            </header>
         )
    }
}