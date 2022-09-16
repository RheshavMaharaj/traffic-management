import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import { useState } from "react"
import "../css/Card.css"

const Card = () => {
  const [star, setStar] = useState(false)

  function onClick() {
    console.log("card view is clicked")
  }

  return (
    <div className="card">
      <div className="card-title">
        <h4>Park Street Intersection, Darlignhurst</h4>
        <button onClick={() => setStar(!star)} className="card-title-star">
          {star ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
      <div className="card-body">
        <div className="card-body-issue">
          <h5>Issue</h5>
          <p>High density one way road.</p>
          <p>School zone during and peak hour traffic.</p>
        </div>
        <div className="card-body-sc">
          <div className="card-body-sc-s">
            <h5>Severity</h5>
            <p>High</p>
          </div>
          <div className="card-body-sc-c">
            <h5>Confidence</h5>
            <p>98.9%</p>
          </div>
        </div>
        <div className="card-body-advice">
          <h5>Advice</h5>
          <p>Redirect traffic to utilise secondary roads.</p>
          <p>Addition of traffic lights at intersection.</p>
        </div>
      </div>
      <div className="card-links">
        <button onClick={onClick} className="card-links-view">
          View
        </button>
        <button className="card-links-dismiss">Dismiss</button>
      </div>
    </div>
  )
}

export default Card
