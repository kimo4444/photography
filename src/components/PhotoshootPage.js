import React from 'react';
import pictureSource from '../fixtures/pictures.js';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';





export default class PhotoshootPage extends React.Component{
  state = {
    display:'inline',
    lightbox: false,
    lightboxImg:''
  }
  handleDisplaySelection = (e, text) => {
    e.preventDefault();
     this.setState(()=> {
       if (text==='column') {
       return {
         display: 'inline'
       }
     } else if (text==='table'){
       return {
         display: 'table'
       }

     }

     })
   }

     handleLightbox = (lightboxImg) => {
       this.setState((prevState) => ({
         lightbox:!prevState.lightbox,
         lightboxImg
       }))
     }
     onLightboxClose = () => {
       this.setState(() => ({
         lightbox:false
       }))
     }


  render(){
    const width = window.innerWidth;

    let noLightbox = 'true';
    if (width<650){
      noLightbox = false;

   }

    const photoshoot = this.props.match.params.shoot;
    const photoshootToShow = pictureSource.filter(picture => {
      return picture.description === photoshoot})


    return (
      <div className = 'page-transition'>
      <div className = {noLightbox && this.state.lightbox === true ? 'lightbox lightbox--active' : 'lightbox'} onClick = {() => this.onLightboxClose()}>
          <img className ='lightbox__image' src = {`${this.state.lightboxImg}`} />
      </div>
      <div className = 'photoshoot__display-type'>
        <a href =''  onClick = {((e, display) => this.handleDisplaySelection(e, 'column'))}>
            Horizontal Display
        </a>
        <a href ='' onClick = {((e, display) => this.handleDisplaySelection(e, 'table'))}>
            Vertical Display
        </a>
      </div>
        <Navigation />

        <div className = {this.state.display==='inline' ? 'photoshoot' : 'table'} id = 'h'>

          {photoshootToShow[0].source.map(picture => {
         return(<img src = {`${picture}`} key = {picture} onClick = {() => this.handleLightbox(picture)}/>)
       })}

      </div>
      </div>

  )
}
}
