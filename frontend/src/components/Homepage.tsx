import logo from '../imgs/logo1.png'
import '../css/Homepage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
// import PlacesAutoComplete from './PlacesAutoComplete'
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

const Homepage = () => {
  let nagivate = useNavigate()

  function routeChange() {
    nagivate('/view_congestion')
  }
  const { handleSearch } = useContext(GlobalContext)

  const [address, setAddress] = useState('15 Broadway, Ultimo NSW 2007')
  const [searchRadius, setSearchRadius] = useState(0)
  const [populationDensity, setPopulationDensity] = useState(0)
  const [timeOfDay, SetTimeOfDay] = useState(0)
  const [all, setAll] = useState(false)
  const [intersections, setIntersections] = useState(false)
  const [speedZones, setSpeedZones] = useState(false)
  const [highways, setHighways] = useState(false)
  const [coordinates, setCoordinates] = useState([])

  function newSearch(
    address: string,
    searchRadius: number,
    populationDensity: number,
    timeOfDay: number,
    all: boolean,
    intersections: boolean,
    speedZones: boolean,
    highways: boolean,
    coordinates: never[]
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

  function handleSubmit(e: React.FormEvent) {
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

    routeChange()
  }

  //////////////////////

  // eslint-disable-next-line
  const [selected, setSelected] = useState(null)

  // TODO: Move this into a useEffect
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
    <section className="section-hero">
      <div className="container">
        <div className="hero">
          <header>
            <Link to={'/'} aria-label="openroad logo">
              <img src={logo} alt="openroad logo" className="logo" />
            </Link>
          </header>
          <h1 className="hero-h1">
            Traffic Congestion Prediction Using Powerful AI
          </h1>
          <p className="hero-p">
            Predict traffic congestion before they happen, a UTS Software
            Engineering Studio Project
          </p>
          <div className="hero-links">
            <a href="#section-search" className="hero-getStarted">
              Get Started
            </a>

            <Link to={'/find-out-more'} className="hero-findOutHow">
              Find out how
            </Link>
          </div>
        </div>

        <div className="section-search" id="section-search">
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <div className="search-inner-container">
                <div className="search-input">
                  <label htmlFor="point-of-interest">Point of Interest</label>
                  {/* <input
                    type="text"
                    placeholder={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  /> */}
                  {/* <div className="places-container"> */}
                  <PlacesAutoComplete
                    setSelected={setSelected}
                    setCoordinates={setCoordinates}
                    setAddress={setAddress}
                  />
                  {/* </div> */}
                </div>

                <div className="search-filter">
                  <div className="search-filter-item">
                    <label htmlFor="search-radius">Search Radius (km)</label>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      step="5"
                      value={searchRadius}
                      onChange={(e) => setSearchRadius(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="search-filter-item">
                    <label htmlFor="population-density">
                      Population Density
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="1"
                      value={populationDensity}
                      onChange={(e) => setPopulationDensity(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="search-filter-item">
                    <label htmlFor="time-of-day">Time of Day</label>
                    <input
                      type="range"
                      min="1"
                      max="9"
                      step="1"
                      value={timeOfDay}
                      onChange={(e) => SetTimeOfDay(parseInt(e.target.value))}
                    />
                  </div>
                </div>

                <div className="search-sidebar">
                  <label htmlFor="show" className="title">
                    Show
                  </label>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={all ? 'Yes' : 'No'}
                      onChange={(e) => setAll(e.currentTarget.checked)}
                    />
                    <label htmlFor="all">All</label>
                  </div>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={intersections ? 'Yes' : 'No'}
                      onChange={(e) =>
                        setIntersections(e.currentTarget.checked)
                      }
                    />
                    <label htmlFor="intersections">Intersections</label>
                  </div>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={speedZones ? 'Yes' : 'No'}
                      onChange={(e) => setSpeedZones(e.currentTarget.checked)}
                    />
                    <label htmlFor="speed-zones">Speed Zones</label>
                  </div>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={highways ? 'Yes' : 'No'}
                      onChange={(e) => setHighways(e.currentTarget.checked)}
                    />
                    <label htmlFor="highways">Highways</label>
                  </div>
                </div>

                <input
                  type="submit"
                  value={'View Congestion Map'}
                  className="view-congestion-map"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>version 1.0.0</p>
          <p>Build for 41129 Software Innovation Studio by Team 9</p>
        </div>
      </footer>
    </section>
  )
}

const PlacesAutoComplete = ({ setSelected, setCoordinates, setAddress }: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const handleSelect = async (address: string) => {
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

export default Homepage
