import React, { Component } from 'react'

export default class Nav extends Component {
  render () {
    return (
      <div className='nav'>
        {/* <img className='phoneIcon' src={'/media/img_10.png'} alt='jardin_do_lago' /> */}
        <a className='phone' href='tel:01-562-867-5309'>
          +55 (22) 2633-0166
        </a>
        <img className='logo' id='nav' src={'/media/img_09.jpg'} alt='jardin_do_lago' />
      </div>
    )
  }
}
