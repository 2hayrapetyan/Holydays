import React, { Component } from 'react'
import { FooterAll } from '../Repeat';
import CopyRight from './CopyRight';
import FooterNav from './FooterNav';
import IconsSocialMedia from './IconsSocialMedia';


export default class Footer extends Component {
  render() {
    return (
      <FooterAll>
        <FooterNav/>
       <hr style={{  border:'1px solid #000000;',width:'1000px'}}></hr>
        <IconsSocialMedia/>
        <CopyRight/>
      </FooterAll>
    )
  }
};
