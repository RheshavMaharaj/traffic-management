import React, { useEffect, useMemo, useState } from "react"
import { GoogleMap, useLoadScript, MarkerF, Marker, Circle, CircleF } from "@react-google-maps/api"

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk",
  });
  const center = useMemo(() => ({ lat: -33.85649, lng: 151.215419 }), []);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch('/stations')
      .then((response) => response.json())
      .then((data) => setStations(data));

  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h1>Wait mate it's loading...</h1>
      </div>
    )
  }

  const options = {
    strokeColor: '#3b468c',
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: '#3b468c',
    fillOpacity: 0.5,
  }
  

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
      {/* @ts-expect-error */}
      {stations.map(station => <MarkerF position={{lat: parseFloat(station.lat), lng: parseFloat(station.lng)}} />)}
      <CircleF radius={2000} center={center} options={options}/>
    </GoogleMap>
  )
}

export default Map
