import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const myIcon = L.icon({
  iconUrl: '/assets/icon-location.svg',
  iconSize: [42, 50],
});

export default function Map({ position }: {position: L.LatLngExpression}) {
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
      <Marker icon={myIcon} position={position} />
    </MapContainer>
  )
}