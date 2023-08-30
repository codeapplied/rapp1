import React, { UseState } from 'react';

// step 28
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// step 28

import logo from '../../assets/logo.svg';

import './navbar.css'

const Menue = () => (
  <>
    <p><a href="#home">Home</a> </p>
    <p><a href="#wca">What is codeapplied?</a> </p>
    <p><a href="#codeapplied">Codeapplied</a> </p>
    <p><a href="#features">Case Study</a></p>
    <p><a href="#blog">Projects</a></p>
  </>
)

const navbar = () => {
  const [toggleMenu, setToggleMenu] = UseState(false);
  return (
    <div className="codeapplied__navbar">
      <div className="codeapplied__navbar-links">
        <div className="codeapplied__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="codeapplied__navbar-links_container">
          <Menue />
        </div>
      </div>
      <div className="codeapplied__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="codeapplied__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="codeapplied__navbar-menu_container scale-up-center">
            <div className="codeapplied__navbar-menu_container-links">
              <Menue />
            </div>
            <div className="codeapplied__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default navbar

