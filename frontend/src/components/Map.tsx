import React, { useEffect, useMemo, useState } from "react"
import { GoogleMap, useLoadScript, MarkerF, CircleF } from "@react-google-maps/api"
import { mapStyle } from "../constants/styleConstants";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk",
  });
  const center = useMemo(() => ({ 'lat': -33.81263, 'lng': 151.110436 }), []);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch(`/stations?longitude=${center.lng}&latitude=${center.lat}&radius=${5}`)
      .then((response) => response.json())
      .then((data) => setStations(data));

  }, [center.lat, center.lng]);

  if (!isLoaded) {
    return (
      <div>
        <h1>Wait mate it's loading...</h1>
      </div>
    )
  }

  const options = {
    strokeColor: '#6c47f4',
    strokeOpacity: 0.1,
    strokeWeight: 5,
    fillColor: '#6c47f4',
    fillOpacity: 0.1,
  }
  

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container" options={{ styles: mapStyle }}>
      <MarkerF position={center} />
      {/* @ts-expect-error */}
      {stations.map(station => <MarkerF position={{lat: parseFloat(station.lat), lng: parseFloat(station.lng)}} />)}
      <CircleF radius={1000} center={center} options={options}/>
    </GoogleMap>
  )
}

export default Map
