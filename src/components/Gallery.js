import React, { Component } from 'react';
import pictureSource from '../fixtures/pictures.js';
import Navigation from './Navigation';
import {NavLink} from 'react-router-dom';
import PhotoshootPage from './PhotoshootPage';
import Masonry from 'react-masonry-component';

export default class Gallery extends Component{

  render(){

    var masonryOptions = {
        isFitWidth:true
    };
    return (
      <div className = 'page-transition'>
          <Navigation />

            <Masonry className = 'gallery' options={masonryOptions}>
              {pictureSource.map(shoot => { return(
                <NavLink to = {`/photoshoot/${shoot.description}`} key = {shoot.description}>
                  <div className = 'gallery__image'>
                    <img src = {shoot.source[0]} alt = {shoot.description} />
                    <p className = 'gallery__image__description'>[{shoot.description}]</p>
                  </div>
                </NavLink>
              )})}
                </Masonry>

        </div>


  )
}
}
