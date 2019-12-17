import React from "react"
import GoogleMapReact from 'google-map-react'

const defaultProps = {
    center: {lat: 40.73, lng: -73.93}, 
    zoom: 12
 }

 const AnyReactComponent = ({ text }) => <div className="map-icon">{text}</div>

 const GoogleMap = () => (
   <div style={{ height: '75vh', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{
            key: process.env.GATSBY_MAP_KEY, 
            language: 'en'
        }}
       defaultCenter={defaultProps.center}
       defaultZoom={defaultProps.zoom}
     >
       <AnyReactComponent
         lat={40.73}
         lng={-73.93}
         text={'Our Location'}
       />
     </GoogleMapReact>
   </div>
 )
 
 export default GoogleMap