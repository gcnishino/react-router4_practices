import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class NotFoundPage extends Component {
  render() {
    return (
      <div className="NotFoundPage">
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <p>
          <Link to="app">Back to Home</Link>
        </p>
      </div>
    )
  }
}

export default NotFoundPage
