import React, { Component } from 'react';
import { FooterParent } from '../Repeat';
import data from './footerData.json';
import logo from './logo.svg';

export default class FooterNav extends Component {
  render() {
    return (
      <nav>
        <FooterParent>
          {data.map(item=>(item?.img ? <img src={logo} alt="" key={item.id}/> : <li key={item.id} style={{listStyle:'none'}}>{item.name}</li> ))}
        </FooterParent>  
      </nav>
    )
  }
};
