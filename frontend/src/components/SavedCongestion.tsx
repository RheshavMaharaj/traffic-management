import Card from "./Card"
import "../css/SavedCongestions.css"

const SavedCongestion = () => {
  return (
    <div className="savedcongestion">
      <h1>Saved Congestion Points</h1>
      <div className="sc-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default SavedCongestion
