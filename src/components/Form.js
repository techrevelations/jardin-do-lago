import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'

export default class Form extends Component {
  render () {
    return (
      <div className='form'>
        <Reveal effect='fadeInUp'>
          {/* <img id='pic6' src={'/media/img_12.jpg'} alt='jardin_do_lago' /> */}
          <div className='title1'>FALE CONOSCO</div>
          <form className='form2'>
            <input className='telephone' type='tel' placeholder='Telefone para retorno:' />
            <input className='name' type='text' placeholder='Seu nome:' />
            <input className='email' type='email' placeholder='Seu email:' />
            <textarea className='message' id='message' type='text' placeholder='Mensagem..' />
            <button className='submit'>ENVIAR</button>
          </form>
        </Reveal>
      </div>
    )
  }
}
