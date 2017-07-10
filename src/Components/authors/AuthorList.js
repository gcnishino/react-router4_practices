import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class AuthorList extends Component {
  render() {
    const createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td>
            <a href={'/#authors/' + author.id}>
              {author.id}
            </a>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      )
    }

    return (
      <div className="AuthorList">
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
}

export default AuthorList
