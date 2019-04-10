import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'

export default class Text2 extends Component {
  render () {
    return (
      <div className='text2'>
        <Reveal effect='fadeInUp'>
          <div className='title1'>O JARDIM DO LAGO JÁ É UMA REALIDADE</div>
          <div className='text1'>
            Você já pode aproveitar tudo o que o Jardim do Lago tem de melhor. As casas de 3 quartos ou 4 suítes já
            estão prontas para morar, esperando a sua visita, assim como o clube com 20 mil m2 e todas as suas atrações.
          </div>
        </Reveal>
      </div>
    )
  }
}
