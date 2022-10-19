import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import "../css/Card.css"
import { useContext } from "react"
import { Congestion, GlobalContext } from "../context/GlobalState"

export interface CardProps {
  congestion: Congestion;
}
const Card = ({ congestion }: CardProps) => {
  const { handleDismiss, handleView, handleSaved } = useContext(GlobalContext)

  return (
    <div className="card">
      <div className="card-title">
        <h4>{congestion.address}</h4>
        <button
          className="card-title-star"
          onClick={() => handleSaved(congestion.stationKey)}
        >
          {congestion.isSaved ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
      <div className="card-body">
        <div className="card-body-issue">
          <h5>Issue</h5>
          {/* {congestion.issues.map((issue, index) => (
            <p key={index}>{issue}</p>
          ))} */}
          <p>This is an issue</p>
        </div>
        <div className="card-body-sc">
          <div className="card-body-sc-s">
            <h5>Severity</h5>
            {/* <p>{congestion.severity}</p> */}
            <p>Severity not available</p>
          </div>
          <div className="card-body-sc-c">
            <h5>Confidence</h5>
            <p
              style={{
                color: congestion.threshold >= 90 ? "green" : "orange",
              }}
            >
              {congestion.threshold}
            </p>
          </div>
        </div>
        <div className="card-body-advice">
          <h5>Advice</h5>
          {/* {congestion.advices.map((advice, index) => (
            <p key={index}>{advice}</p>
          ))} */}
          <p>Advices are currently unavailable</p>
        </div>
      </div>
      <div className="card-links">
        <button
          className="card-links-view"
          onClick={() => handleView(congestion)}
        >
          View
        </button>
        <button
          className="card-links-dismiss"
          onClick={() => handleDismiss(congestion.stationKey)}
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

export default Card
