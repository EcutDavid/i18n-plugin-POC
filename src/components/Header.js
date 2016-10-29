import React, { Component } from 'react'

import 'styles/header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1 className='title'>Nothing bug a simple DEMO</h1>
        <h5 className='sub-title'>{__('DEMO string A')}</h5>
      </div>
    )
  }
}
