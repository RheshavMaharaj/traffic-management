import React from "react"
// import React, { useMemo, useContext } from 'react'
import { useLoadScript } from "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"
import "@reach/combobox/styles.css"

/////

const PlacesAutocomplete = () => {
  //////////////////////

  // eslint-disable-next-line
  const [selected, setSelected] = useState(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk",
    libraries: ["places"],
  })

  if (!isLoaded) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  }

  //////////////////////

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const handleSelect = async (address) => {
    setValue(address, false)
    setAddress(address)
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = await getLatLng(results[0])
    console.log(lat, " ", lng)
    setCoordinates([lat, lng])
    setSelected({ lat, lng })
  }
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        disabled={!ready}
        className="combobox-input"
        placeholder="15 Broadway, Ultimo NSW 2007"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export default PlacesAutocomplete
