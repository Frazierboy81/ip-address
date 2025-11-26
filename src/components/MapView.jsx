// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
// import { MapContainer } from 'react-leaflet/MapContainer'

import {
    MapContainer,
   TileLayer,
   Marker,
   Popup
} from 'react-leaflet'

function MapView() {
 const position = [51.505, -0.09]

return(
  <MapContainer center={position} zoom={13} style={{height: "100%", width:"100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)
}


export default MapView;