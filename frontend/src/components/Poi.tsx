import Card from "./Card"
import "../css/POI.css"
import React from "react"

const Poi = () => {
  return (
    <div className="vc-poi">
      <h1>Point of Interest</h1>
      <div className="vc-poi-cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Poi
