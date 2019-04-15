import React, { Component } from 'react'

import './App.css'
import Pic1 from './components/Pic1'
import Pic2 from './components/Pic2'
import Pic3 from './components/Pic3'
import Nav from './components/Nav'
import Form from './components/Form'
import Text1 from './components/Text1'
// import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Text3 from './components/Text3'
import Text2 from './components/Text2'
import Footer from './components/Footer'
import Ending from './components/Ending'
// import Map from './components/Map'
import { Router } from '@reach/router'

class App extends Component {
  // constructor () {
  //   super()

  //   this.state = {
  //     hover: false
  //   }

  //   this.updateHoverState = this.updateHoverState.bind(this)
  // }

  // updateHoverState (hover) {
  //   this.setState({ hover: hover })
  // }
  render () {
    // console.log(this.state.hover)
    return (
      <div className='App'>
        <Nav />
        {/* <Router> */}
        <Pic1 />
        <Pic2 />
        <Pic3 />
        <Text1 />
        <Text2 />
        <Text3 />
        <Form />
        <Footer />
        {/* <Map /> */}
        {/* </Router> */}
        {/* <h1 id='demo'>Mouse over me</h1> */}
        <Ending />
      </div>
    )
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    // console.log(window.innerHeight, document.querySelector('.text2').offsetTop)
    // document.querySelector('.footer').offsetTop;
    // console.log(window.scrollY)
    // console.log(document.querySelector('.title2').getBoundingClientRect().top, document.querySelector('.text2').style)
    const titleBody1 = document.querySelector('.title1').getBoundingClientRect().bottom / 50 - 2
    const titleBody2 = document.querySelector('.title2').getBoundingClientRect().bottom / 500 - 0.2
    const titleBody3 = document.querySelector('.title3').getBoundingClientRect().bottom / 500
    document.querySelector('.title1').style.opacity = titleBody1
    // (/ titleBodyAnon
    document.querySelector('.title2').style.opacity = titleBody2
    document.querySelector('.title3').style.opacity = titleBody3

    // console.log(titleBody1, document.querySelector('.title1').getBoundingClientRect().top / 50)

    const textBody1 = document.querySelector('.innertext1').getBoundingClientRect().bottom / 450 - 0.5
    const textBody2 = document.querySelector('.innertext2').getBoundingClientRect().bottom / 450 - 0.3
    const textBody3 = document.querySelector('.innertext3').getBoundingClientRect().bottom / 450
    console.log(titleBody2, textBody2)
    document.querySelector('.innertext1').style.opacity = textBody1
    document.querySelector('.innertext2').style.opacity = textBody2
    document.querySelector('.innertext3').style.opacity = textBody3

    // document.getElementById('pic4').addEventListener('mouseenter', mouseEnter)
    // document.getElementById('pic4').addEventListener('mouseleave', mouseLeave)
    // document.querySelector('.satMap').addEventListener('mouseover', mouseEnter)
    // document.querySelector('.satMap').addEventListener('mouseleave', mouseLeave)

    // function mouseEnter () {
    //   this.setState({ hover: true })
  }
  // document.getElementById('pic4').style.display = 'none'
  // document.getElementById('map').style.display = 'block'

  // function mouseLeave () {
  //   this.setState({ hover: false })
  // document.getElementById('pic4').style.display = 'block'
  // document.getElementById('map').style.display = 'none'
  //   }
  // }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

export default App
