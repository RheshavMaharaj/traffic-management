import React, { useContext } from "react"
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  CircleF,
} from "@react-google-maps/api"
import { mapStyle } from "../constants/styleConstants"
import alert from "../imgs/red-alert-icon.svg"
import { Congestion, GlobalContext } from "../context/GlobalState"
import '../css/Map.css'

export const Spinner = () => <div className="loader"></div>;

function Map() {
  const { radius, center, congestions, handleView, loaded } = useContext(GlobalContext)
  const { latitude, longitude } = center
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk",
  })

  if (!loaded) {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Spinner />
      </div>
    )
  }

  const options = {
    strokeColor: "#6c47f4",
    strokeOpacity: 0.1,
    strokeWeight: 5,
    fillColor: "#6c47f4",
    fillOpacity: 0.1,
  }

  return (
    <GoogleMap
      zoom={15}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="map-container"
      options={{
        styles: mapStyle,
        minZoom: 13,
        maxZoom: 17,
      }}
    >
      {/* <MarkerF position={center} /> */}
      {congestions.map((congestion: Congestion, index: number) => (
        <MarkerF
          onClick={() => handleView(congestion)}
          key={index}
          position={{
            lat: congestion.latitude,
            lng: congestion.longitude,
          }}
          icon={{ url: alert, scaledSize: new google.maps.Size(31, 43) }}
        />
      ))}
      <CircleF
        radius={radius * 1000}
        center={{ lat: latitude, lng: longitude }}
        options={options}
      />
    </GoogleMap>
  )
}

export default Map
