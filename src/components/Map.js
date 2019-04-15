import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ marker }) => <div> Jardin Do Lago</div>

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: -22.769918,
      lng: -41.9358118
    },
    zoom: 16
  }
  render () {
    // const { showContent } = this.props.showContent
    //   const {updateHoverState} = this.props;
    // {onMouseEnter={() => updateHoverState(true)}
    //     onMouseLeave={() => updateHoverState(false)}
    return (
      // Important! Always set the container height explicitly
      <div id='map1' style={{ height: '100%', width: 'width: 100%' }} onMouseLeave={this.props.toggleContent}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDoHUAFjRxUIb5g23jDJwNBUsFaLOoIKq0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={-22.769918} lng={-41.9358118} text='Jardin Do Lago' />
        </GoogleMapReact>
      </div>
    )
  }
}
