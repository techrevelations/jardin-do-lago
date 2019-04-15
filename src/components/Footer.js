import React, { Component } from 'react'
import Map from './Map'
export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
    this.state = { showContent: true }
  }

  titleWasClicked (event) {
    event.preventDefault()
    const { dataCallBack } = this.props
    if (dataCallBack !== undefined) {
      dataCallBack('hello world')
    }
  }

  toggleContent (event) {
    event.preventDefault()
    const { showContent } = this.state
    this.setState({ showContent: !showContent })
  }

  render () {
    // const { post } = this.props
    const { showContent } = this.state
    return (
      <div
        className='satMap'
        // onMouseLeave={this.toggleContent}
      >
        {showContent === true ? (
          <img onMouseOver={this.toggleContent} id='pic4' src={'/media/img_08.jpg'} alt='please report issue' />
        ) : (
          <Map showContent={this.state.showContent} toggleContent={this.toggleContent} />
        )}
        {/* {showContent === this.state} */}
        {/* <button onMouseOver={this.toggleContent}>Toggle Content Display</button> */}

        {/* > */}
      </div>
    )
  }
}
