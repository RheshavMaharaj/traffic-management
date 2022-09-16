import React, { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk",
  })
  const center = useMemo(() => ({ lat: -33.85649, lng: 151.215419 }), [])

  if (!isLoaded) {
    return (
      <div>
        <h1>Wait mate it's loading...</h1>
      </div>
    )
  }

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export default Map
