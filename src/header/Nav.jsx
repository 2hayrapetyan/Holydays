import React, { Component } from "react";
import Item from "./NavItems.json";
import styles from "./Header.module.css"
import { NavBarItem } from "../Repeat";
export default class Nav extends Component {
  render() {
    return (
        <nav>
      <ul className={styles.menu}>
        {Item.map((item) => (
          <NavBarItem key={item.id}>{item.name}</NavBarItem>
        ))}
      </ul></nav>
    );
  }
}
