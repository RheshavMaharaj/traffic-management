import { useContext } from 'react'
import { GrClose } from 'react-icons/gr'
import '../css/Modal.css'
import { GlobalContext } from "../context/GlobalState"


const Modal = ({ congestion }: any) => {

  const { setShowModal } = useContext(GlobalContext)

  return (
    <div className="modal">
      {congestion && (
        <>
          <div className="modal-title">
            {/* <h1>{congestion.address}</h1> */}
            <h1>Sydney Opera House</h1>
            {/* <div className="modal-close">
              <GrClose />
            </div> */}
          </div><hr /><div className="modal-issue">
            <h3>Issue</h3>
            {/* {congestion.issues.map((issue: any, index: number) => (
              <p key={index}>{issue}</p>
            ))} */}
            <p>Detected 4 points of congestion for the given time of day</p>
          </div><div className="modal-severity">
            <h3>Severity</h3>
            {/* <p>{congestion.severity}</p> */}
            <p>High Severity</p>
          </div><div className="modal-confidence">
            <h3>Confidence</h3>
            {/* <p style={{ color: congestion.confidence >= 90 ? "green" : "orange" }}>
              {congestion.confidence}
            </p> */}
            <p>96%</p>
          </div><div className="modal-mitigation-advice">
            <h3>Mitigation Advice</h3>
            {/* {congestion.advices.map((advice: any, index: number) => (
              <p key={index}>{advice}</p>
            ))} */}
            <p>Mitigation currently unavailable</p>
          </div>
        </>
      )}
      <button className="modal-dismiss" onClick={() => setShowModal(false)}>
        Dismiss
      </button>
    </div>
  )
}

export default Modal
