import React from 'react'

import Header from './Header'

import 'normalize.css/normalize.css'
import 'styles/app.scss'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <button className="button">{__("Hello World")}</button>
      </div>
    )
  }
}

export default AppComponent
