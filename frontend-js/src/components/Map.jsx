import React, { useMemo, useContext } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { GlobalContext } from '../context/GlobalState'
import '@reach/combobox/styles.css'

function Map() {
  const { congestions, handleView } = useContext(GlobalContext)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk',
    libraries: ['places'],
  })
  const center = useMemo(() => ({ lat: -33.877803, lng: 151.208216 }), [])

  if (!isLoaded) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  }

  return (
    <>
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName="map-container"
      >
        {/* <MarkerF position={center} /> */}
        {congestions.map((congestion, index) => (
          <MarkerF
            onClick={() => handleView(congestion)}
            key={index}
            position={{
              lat: congestion.coordinate[0],
              lng: congestion.coordinate[1],
            }}
          />
        ))}
        {/* {selected && <MarkerF position={selected} />} */}
      </GoogleMap>
    </>
  )
}
export default Map
