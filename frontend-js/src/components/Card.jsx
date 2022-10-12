import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import "../css/Card.css"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Card = ({ congestion }) => {
  const { handleDismiss, handleView, handleSaved } = useContext(GlobalContext)

  return (
    <div className="card">
      <div className="card-title">
        <h4>{congestion.address}</h4>
        <button
          className="card-title-star"
          onClick={() => handleSaved(congestion.id)}
        >
          {congestion.isSaved ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
      <div className="card-body">
        <div className="card-body-issue">
          <h5>Issue</h5>
          {congestion.issues.map((issue, index) => (
            <p key={index}>{issue}</p>
          ))}
        </div>
        <div className="card-body-sc">
          <div className="card-body-sc-s">
            <h5>Severity</h5>
            <p>{congestion.severity}</p>
          </div>
          <div className="card-body-sc-c">
            <h5>Confidence</h5>
            <p
              style={{
                color: congestion.confidence >= 90 ? "green" : "orange",
              }}
            >
              {congestion.confidence}
            </p>
          </div>
        </div>
        <div className="card-body-advice">
          <h5>Advice</h5>
          {congestion.advices.map((advice, index) => (
            <p key={index}>{advice}</p>
          ))}
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
          onClick={() => handleDismiss(congestion.id)}
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

export default Card
