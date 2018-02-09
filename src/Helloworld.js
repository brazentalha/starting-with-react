import React, { Component } from 'react';
import './App.css'

class Helloworld extends Component{

customeStyleLink = {
  backgroundColor:'blue',
  textDecoration: 'underline'
}

   render(){
     return(
       <a href={this.props.link} style={this.customeStyleLink}>{this.props.linkText}</a>
     )
   }
}
export default Helloworld;