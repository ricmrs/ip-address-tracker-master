import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const origin = [37.40599, -122.07851]
let [latitude, longitude] = origin;
latitude -= 0.006
const position = [latitude, longitude] as L.LatLngExpression
const positionMarker = origin as L.LatLngExpression

const myIcon = L.icon({
  iconUrl: '/assets/icon-location.svg',
  iconSize: [42, 50],
});

export default function Map() {
  return (
    <MapContainer 
      style={{ height: '100%' }}  
      center={position} 
      zoom={15} 
      scrollWheelZoom={false} 
      zoomControl={false} 
      dragging={false}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={myIcon} position={positionMarker} />
    </MapContainer>
  )
}