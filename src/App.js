import React, { Component } from 'react'

import './App.css'
import Pic1 from './components/Pic1'
import Pic2 from './components/Pic2'
import Pic3 from './components/Pic3'
import Nav from './components/Nav'
import Form from './components/Form'
import Headline from './components/Headline'
// import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Text3 from './components/Text3'
import Text2 from './components/Text2'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Pic1 />
        <Pic2 />
        <Pic3 />
        <Headline />
        <Text2 />
        <Text3 />
        <Form />
        <div className='footer' />
      </div>
    )
  }
}

export default App
