import Card from "./Card"
import { useContext } from "react"
import "../css/SavedCongestions.css"
import { Congestion, GlobalContext } from "../context/GlobalState"

const SavedCongestion = () => {
  const { congestions } = useContext(GlobalContext)

  const savedCongestions: Congestion[] = [];

  congestions.forEach((congestion: Congestion) => {
    if (congestion.isSaved) {
      savedCongestions.push(congestion)
    }
  })

  return (
    <div className="savedcongestion">
      <h1>Saved Congestion Points</h1>
      <div className="sc-cards">
        {savedCongestions.length > 0
          ? savedCongestions.map(
              (congestion, index) =>
                congestion.isSaved && (
                  <Card key={index} congestion={congestion} />
                )
            )
          : "No saved congestions found"}
      </div>
    </div>
  )
}

export default SavedCongestion;
