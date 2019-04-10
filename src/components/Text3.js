import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'

export default class Text3 extends Component {
  render () {
    return (
      <div className='text3'>
        <Reveal effect='fadeInUp'>
          <div className='title1'>UM NOVO CONCEITO DE CONDOMÍNIO</div>
          <div className='text1'>
            Jardim do Lago. Um condomínio planejado para oferecer o máximo em conforto, privacidade, lazer, diversão e
            segurança. Tudo isso com clube privativo e ainda um projeto de paisagismo sem igual desenvolvido por
            Fernando Chacel, com trilhas ecológicas, lago, bosques e uma qualidade de vida como nenhum outro lugar de
            Búzios.
          </div>
        </Reveal>
      </div>
    )
  }
}
