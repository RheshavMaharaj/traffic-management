import { GrClose } from 'react-icons/gr'
import '../css/Modal.css'

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-title">
        <h1>Park Street Intersection, Darlinghurst</h1>
        <div className="modal-close">
          <GrClose />
        </div>
      </div>
      <hr />
      <div className="modal-issue">
        <h3>Issue</h3>
        <p>High density one way road.</p>
        <p>School zone during and peak hour traffic.</p>
      </div>
      <div className="modal-severity">
        <h3>Severity</h3>
        <p>High</p>
      </div>
      <div className="modal-confidence">
        <h3>Confidence</h3>
        <p>99.98</p>
      </div>
      <div className="modal-mitigation-advice">
        <h3>Mitigation Advice</h3>
        <p>Redirect traffic to utilise secondary roads.</p>
        <p>Addition of traffic lights at intersection.</p>
      </div>
      <button className="modal-dismiss">Dismiss</button>
    </div>
  )
}

export default Modal
