import React from 'react';
import Contact from './Contact';
import {Link} from 'react-router-dom';




export default class Navigation extends React.Component  {
  state = {
    navCollapsed:false,
  }
  handleDropdown = () => {
    this.setState((prevState) => ({
      navCollapsed:!prevState.navCollapsed

    }))
  }

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
