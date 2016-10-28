import React from 'react'
import 'normalize.css/normalize.css'

import 'styles/app.scss'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <button className="button">{__("Hello World")}</button>
      </div>
    )
  }
}

export default AppComponent
