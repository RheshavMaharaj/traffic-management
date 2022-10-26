import { TiDeleteOutline } from 'react-icons/ti'
import '../css/Search.css'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

//////

// import React, { useMemo, useContext } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import '@reach/combobox/styles.css'

/////

const Search = () => {
  const { handleSearch } = useContext(GlobalContext)

  const [address, setAddress] = useState('')
  const [searchRadius, setSearchRadius] = useState(0)
  const [populationDensity, setPopulationDensity] = useState(0)
  const [timeOfDay, SetTimeOfDay] = useState(0)
  const [all, setAll] = useState(false)
  const [intersections, setIntersections] = useState(false)
  const [speedZones, setSpeedZones] = useState(false)
  const [highways, setHighways] = useState(false)
  const [coordinates, setCoordinates] = useState([])

  function newSearch(
    address,
    searchRadius,
    populationDensity,
    timeOfDay,
    all,
    intersections,
    speedZones,
    highways,
    coordinates
  ) {
    return {
      address: address,
      searchRadius: searchRadius,
      populationDensity: populationDensity,
      timeOfDay: timeOfDay,
      all: all,
      intersections: intersections,
      speedZones: speedZones,
      highways: highways,
      coordinates: coordinates,
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    handleSearch(
      newSearch(
        address,
        searchRadius,
        populationDensity,
        timeOfDay,
        all,
        intersections,
        speedZones,
        highways,
        coordinates
      )
    )
  }

  //////////////////////

  // eslint-disable-next-line
  const [selected, setSelected] = useState(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk',
    libraries: ['places'],
  })

  if (!isLoaded) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  }

  //////////////////////

  return (
    <div className="vc-search">
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="vc-search-container">
            <h1>Search</h1>
            <div className="vc-search-items vc-search-poi">
              <h3 className="search-title">Point of Interest</h3>
              <label>
                {/* <input
                  type="text"
                  placeholder="15 Broadway, Ultimo NSW 2007"
                  onChange={(e) => setAddress(e.target.value)}
                  className="vc-search-input"
                  required
                /> */}
                <div style={{ width: '100%' }}>
                  <PlacesAutoComplete
                    setSelected={setSelected}
                    setCoordinates={setCoordinates}
                    setAddress={setAddress}
                    className="vc-search-input"
                  />
                </div>

                <span className="search-input-clear">
                  <TiDeleteOutline
                    size="1.5em"
                    onClick={() => setAddress('')}
                  />
                </span>
              </label>
            </div>

            <div className="vc-search-items">
              <h3>Search Radius (km)</h3>
              <label>
                <input
                  type="range"
                  value={searchRadius}
                  onChange={(e) => setSearchRadius(e.target.value)}
                />
                <span>20</span>
              </label>
            </div>

            <div className="vc-search-items">
              <h3>Populatin Density</h3>
              <label>
                <input
                  type="range"
                  value={populationDensity}
                  onChange={(e) => setPopulationDensity(e.target.value)}
                />
                <span>Low</span>
              </label>
            </div>

            <div className="vc-search-items">
              <h3>Time of Day</h3>
              <label>
                <input
                  type="range"
                  value={timeOfDay}
                  onChange={(e) => SetTimeOfDay(e.target.value)}
                />
                <span>5pm</span>
              </label>
            </div>

            <div className="vc-search-show">
              <h3>Show</h3>
              <div className="vc-search-show-container">
                <label>
                  <input
                    className="search-input-checkout"
                    type="checkbox"
                    value={all}
                    onChange={(e) => setAll(e.currentTarget.checked)}
                  />
                  All
                </label>
                <label>
                  <input
                    className="search-input-checkout"
                    type="checkbox"
                    value={intersections}
                    onChange={(e) => setIntersections(e.currentTarget.checked)}
                  />
                  Intersections
                </label>
                <label>
                  <input
                    className="search-input-checkout"
                    type="checkbox"
                    value={speedZones}
                    onChange={(e) => setSpeedZones(e.currentTarget.checked)}
                  />
                  Speed Zones
                </label>
                <label>
                  <input
                    className="search-input-checkout"
                    type="checkbox"
                    value={highways}
                    onChange={(e) => setHighways(e.currentTarget.checked)}
                  />
                  Highways
                </label>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Refine Search"
            className="vc-search-refine"
          />
        </form>
      </div>
    </div>
  )
}

const PlacesAutoComplete = ({ setSelected, setCoordinates, setAddress }) => {
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
    console.log(lat, ' ', lng)
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
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export default Search
