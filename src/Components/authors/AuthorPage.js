import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import AuthorList from './AuthorList'
import AuthorApi from '../../api/authorApi'

class AuthorPage extends Component {
  state = {
    authors: [],
  }

  componentDidMount() {
    this.setState({authors: AuthorApi.getAllAuthors()})
  }

  render() {
    return (
      <div className="AuthorPage">
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

export default AuthorPage
