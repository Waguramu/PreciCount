import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-warning navbar-light px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-0 font-weight-bolder display-4">
             <Link to="/" className="nav-link">
              PreciCount
             </Link>
          </li>
        </ul>

       {/*<Input placeholder='Search...'/>*/}

        <Link className="ml-auto" to="/cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              Add Sample
            </ButtonContainer> 
        </Link>

      </nav>
    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`