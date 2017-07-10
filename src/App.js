import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomePage from './Components/HomePage'
import Header from './Components/common/Header'
import AuthorPage from './Components/authors/AuthorPage'
import AboutPage from './Components/about/AboutPage'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <div className="container-fluid">
            <Route path="/app" component={HomePage} />
            <Route path="/authors" component={AuthorPage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
