import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import logo from "../logo.svg"

class Navbar extends Component {
  render() {
    return (


      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-small-5">
      {/* bg-primary required from bootstrap to display navbar with style*/}

      {/*
        Required when displaying icon
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk
        */}

        <Link to="/">
          <img src={logo} alt="phone-logo" className="navbar-brand"/>
        </Link>

        {/*bootstrap align items center is vertical*/}

        <ul className="navbar-nav align-items-center">

          <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                products
               </Link>
          </li>
        </ul>
        {/*margin left auto sent button to far left using bootstrap*/}
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
          <span><i className="fas fa-cart-plus"/></span>
          My Cart</ButtonContainer>
        </Link>

      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`

background:var(--mainblue);
.nav-link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:capitalize;
}

`



export default Navbar;
