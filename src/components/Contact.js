import React, { Component } from 'react';
import pictureSource from '../fixtures/pictures.js';
import Navigation from './Navigation';


const Contact =(props) => {

  return (
      <div className ='page-transition'>
        <Navigation />
        <div className = 'contact'>
        My Film works are influenced by Patrick Demarchelier's perfected studio lighting and Peter Lindbergh's cinematic location work. I adopted best of both world and made my own style.
      
        <br/>
        Email: jaykimfilm@gmail.com
        </div>
      </div>
    )

}

export default Contact;
