import React, { Component } from 'react'

export default class Ending extends Component {
  render () {
    return (
      <div className='ending'>
        <h1 id='contact'>
          Contact Address: Av. José Bento Ribeiro Dantas - Vila Luiza, Búzios - RJ, 28950-000, Brazil
        </h1>
        <a href='mailto:contato@jardimdolago.com'>contato@jardimdolago.com</a>
        <img id='pic5' src={'/media/img_11.jpg'} alt='jardin_do_lago' />
      </div>
    )
  }
}
