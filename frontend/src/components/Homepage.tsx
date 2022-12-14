import logo from "../imgs/logo1.png"
import "../css/Homepage.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
// import PlacesAutoComplete from './PlacesAutoComplete'
//////

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
import { Spinner } from "./Map"

/////

export interface LatLng {
  latitude: number
  longitude: number
}

const Homepage = () => {
  let nagivate = useNavigate()

  function routeChange() {
    nagivate("/view_congestion")
  }
  const { handleSearch, setCenter, setRadius } = useContext(GlobalContext)

  // eslint-disable-next-line
  const [address, setAddress] = useState("15 Broadway, Ultimo NSW 2007")
  const [searchRadius, setSearchRadius] = useState(1)
  const [populationDensity, setPopulationDensity] = useState(0)
  const [timeOfDay, SetTimeOfDay] = useState(0)
  const [all, setAll] = useState(false)
  const [intersections, setIntersections] = useState(false)
  const [speedZones, setSpeedZones] = useState(false)
  const [highways, setHighways] = useState(false)
  const [coordinates, setCoordinates] = useState<LatLng>()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (coordinates && searchRadius > 0) {
      handleSearch({
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
        radius: searchRadius,
        population: populationDensity,
        time: timeOfDay,
      })
      setCenter(coordinates)
      setRadius(searchRadius)
      routeChange()
    }
  }

  // eslint-disable-next-line
  const [_, setSelected] = useState<{ lat: number; lng: number }>()

  // TODO: Move this into a useEffect
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuHjFvheL-aNtEzct67_ZblEegI_xRghk",
    libraries: ["places"],
    region: "au",
  })

  if (!isLoaded) {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginTop: 500}}>
        <Spinner />
      </div>
    )
  }

  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero">
          <header>
            <Link to={"/"} aria-label="openroad logo">
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

            <Link to={"/find-out-more"} className="hero-findOutHow">
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
                      min="1"
                      max="10"
                      step="1"
                      value={searchRadius}
                      onChange={(e) =>
                        setSearchRadius(parseInt(e.target.value))
                      }
                      list="tickmarksRadius"
                      className={`slider slider-50`}
                    />
                    <datalist id="tickmarks2">
                      <option value="1" label="1"></option>
                      <option value="2" label="2"></option>
                      <option value="3" label="3"></option>
                      <option value="4" label="4"></option>
                      <option value="5" label="5"></option>
                      <option value="6" label="6"></option>
                      <option value="7" label="7"></option>
                      <option value="8" label="8"></option>
                      <option value="9" label="9"></option>
                      <option value="10" label="10"></option>
                    </datalist>
                  </div>
                  <div className="search-filter-item">
                    <label htmlFor="population-density">
                      Population Density
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="9"
                      step="1"
                      value={populationDensity}
                      onChange={(e) =>
                        setPopulationDensity(parseInt(e.target.value))
                      }
                      list="tickmarksPopulation"
                      className={`slider slider-50`}
                    />
                    <datalist id="tickmarksPopulation">
                      <option value="0" label="Low"></option>
                      <option value="1" label=""></option>
                      <option value="2" label=""></option>
                      <option value="3" label=""></option>
                      <option value="4" label="Medium"></option>
                      <option value="5" label=""></option>
                      <option value="6" label=""></option>
                      <option value="7" label=""></option>
                      <option value="8" label=""></option>
                      <option value="9" label="High"></option>
                    </datalist>
                  </div>
                  <div className="search-filter-item">
                    <label htmlFor="time-of-day">Time of Day</label>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      step="1"
                      value={timeOfDay}
                      onChange={(e) => SetTimeOfDay(parseInt(e.target.value))}
                      list="tickmarksTime"
                      className={`slider slider-50`}
                    />
                    <datalist id="tickmarksTime">
                      <option value="0" label="5 am"></option>
                      <option value="1" label="7 am" style={{color: '#6c47f4'}}></option>
                      <option value="2" label="9 am" style={{color: '#6c47f4'}}></option>
                      <option value="3" label="11 am" style={{color: '#6c47f4'}}></option>
                      <option value="4" label="1 pm"></option>
                      <option value="5" label="3 pm" style={{color: '#6c47f4'}}></option>
                      <option value="6" label="5 pm" style={{color: '#6c47f4'}}></option>
                      <option value="7" label="7 pm" style={{color: '#6c47f4'}}></option>
                      <option value="8" label="9 pm"></option>
                    </datalist>
                  </div>
                </div>

                <div className="search-sidebar">
                  <label htmlFor="show" className="title">
                    Show
                  </label>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={all ? "Yes" : "No"}
                      onChange={(e) => setAll(e.currentTarget.checked)}
                    />
                    <label htmlFor="all">All</label>
                  </div>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={intersections ? "Yes" : "No"}
                      onChange={(e) =>
                        setIntersections(e.currentTarget.checked)
                      }
                    />
                    <label htmlFor="intersections">Intersections</label>
                  </div>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={speedZones ? "Yes" : "No"}
                      onChange={(e) => setSpeedZones(e.currentTarget.checked)}
                    />
                    <label htmlFor="speed-zones">Speed Zones</label>
                  </div>
                  <div className="search-sidebar-item">
                    <input
                      type="checkbox"
                      value={highways ? "Yes" : "No"}
                      onChange={(e) => setHighways(e.currentTarget.checked)}
                    />
                    <label htmlFor="highways">Highways</label>
                  </div>
                </div>

                <input
                  type="submit"
                  // style={{
                  //   borderRadius: 15,
                  //   height: 50,
                  //   width: 200,
                  //   boxShadow: "none",
                  // }}
                  value={"View Congestion Map"}
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

export interface PlacesAutoCompleteProps {
  setSelected: (coords: { lat: number; lng: number }) => void
  setCoordinates: (coords: LatLng) => void
  setAddress: (address: string) => void
}

const PlacesAutoComplete = ({
  setSelected,
  setCoordinates,
  setAddress,
}: PlacesAutoCompleteProps) => {
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
    setCoordinates({ latitude: lat, longitude: lng })
    setSelected({ lat, lng })
  }

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        // style={{ width: 600 }}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        disabled={!ready}
        className="combobox-input"
        placeholder="15 Broadway, Ultimo NSW 2007"
      />
      <ComboboxPopover className="combo-box-popover">
        <ComboboxList className="combo-box-list">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
                className="combo-box-option"
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export default Homepage
