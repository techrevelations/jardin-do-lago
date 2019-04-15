import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'

export default class Text3 extends Component {
  render () {
    return (
      <div className='text3'>
        <Reveal effect='fadeInUp'>
          <div className='title3'>CLUBE E LOUNGE</div>
          <div className='innertext3'>
            Jardim do Lago. Um condomínio planejado para oferecer o máximo em conforto, privacidade, lazer, diversão e
            segurança. Além de um clube privativo e uma qualidade de vida ímpar. E o melhor é que tudo isso já está
            pronto.
          </div>
        </Reveal>
      </div>
    )
  }
}
