import React, {Component} from 'react'

class About extends Component {
  statics = {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm("Are you sure you want to read a page that's this boring?")) {
        transition.about()
      } else {
        callback()
      }
    },

    willTransitionFrom: function(transition, component) {
      if (!confirm("Are you sure you want to leave a page that's this exciting?")) {
        transition.about()
      }
    },
  }

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    )
  }
}

export default About
