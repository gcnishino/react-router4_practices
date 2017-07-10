import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router, and Flux for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    )
  }
}

export default Home
