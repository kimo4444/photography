import React, { Component } from 'react';
import Navigation from './Navigation';
import YouTube from 'react-youtube';
import videoId from '../fixtures/videos.js';


const Film =(props) => {
  const opts = {
        height: '480',
        width: '854',
      };
  return (
      <div className ='page-transition'>
      <Navigation/>

        <div className = 'film-gallery'>
        {videoId.map(id => {return (<YouTube
        videoId={id} opts = {opts} key = {id}
        />)})}


        </div>

      </div>
    )

}

export default Film;
