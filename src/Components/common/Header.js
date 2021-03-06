import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import logo from '../../images/pluralsight-logo.png'

class Header extends Component {
  render() {
    return (
      <nav className="Header navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="app">Home</Link>
            </li>
            <li>
              <Link to="authors">Authors</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
