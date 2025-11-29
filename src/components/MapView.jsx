import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import {
    MapContainer,
   TileLayer,
   Marker,
   Popup
} from 'react-leaflet'

function MapView() {
 const position = [51.505, -0.09]

return(
  <MapContainer className="mt-0 w-full h-100 position abosolute -z-10" center={position} zoom={13}>
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