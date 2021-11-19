import React from 'react';
import Contact from './Contact';
import {Link} from 'react-router-dom';
import {FaInstagram} from 'react-icons/lib/fa/instagram';
import {FaVimeo} from 'react-icons/lib/fa/vimeo';



export default class Navigation extends React.Component  {
  state = {
    navCollapsed:false,
  }
  handleDropdown = () => {
    this.setState((prevState) => ({
      navCollapsed:!prevState.navCollapsed

    }))
  }
  // <a  href = 'https://www.instagram.com/jaykimfilm/?hl=en'>
  //     <FaInstagram className='navbar__media' />
  // </a>
  // <a href = 'https://www.instagram.com/jaykimfilm/?hl=en'>
  //   <FaVimeo className='navbar__media' />
  // </a>

  render(){
  return (
      <nav className = {this.state.navCollapsed ? 'nav active' : 'navbar'}>
          <Link className=' navbar__item navbar__item--logo' to = '/'><span>NYC</span>JAY <br/>KIM</Link>
          <Link className='navbar__item' to ='/'>- photography -</Link>
          <Link className='navbar__item' to ='/Film'>film - </Link>
          <Link className='navbar__item' to ='/contact/'>about -</Link>

      </nav>
    )
}
}
