import React from "react"
import GoogleMapReact from 'google-map-react'

const defaultProps = {
    center: {lat: 40.73, lng: -73.93}, 
    zoom: 12
 }

 const AnyReactComponent = ({ text }) => <div>{text}</div>

 const GoogleMap = () => (
   <div style={{ height: '100vh', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{
            key: AIzaSyA5xbkEkWAEi9xKtYit5yFVeLkH4DWGOSU, 
            language: 'en'
        }}
       defaultCenter={defaultProps.center}
       defaultZoom={defaultProps.zoom}
     >
       <AnyReactComponent
         lat={59.955413}
         lng={30.337844}
         text={'Kreyser Avrora'}
       />
     </GoogleMapReact>
   </div>
 )
 
 export default GoogleMap