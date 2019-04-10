import React, { Component } from 'react'

export default class Pic2 extends Component {
  render () {
    return (
      // image 04 is preferable but unable to deploy to heroku atm
      <div className='pic2'>
        <img id='pic2' src={'/media/img_07.jpg'} alt={'/media/img_06.jpg'} />
      </div>
    )
  }
}
