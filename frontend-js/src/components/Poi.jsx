import "../css/POI.css"
import Card from "./Card"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Poi = () => {
  const { congestions } = useContext(GlobalContext)

  return (
    <div className="vc-poi">
      <h1>Point of Interest</h1>
      <div className="vc-poi-cards">
        {congestions.length > 0
          ? congestions.map((congestion, index) => (
              <Card key={index} congestion={congestion} />
            ))
          : "Yoohoo no congestions!"}
      </div>
    </div>
  )
}

export default Poi
