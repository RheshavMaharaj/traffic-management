import { TiDeleteOutline } from 'react-icons/ti'
import { BiRightArrowAlt } from 'react-icons/bi'
import '../css/Search.css'

const Search = () => {
  return (
    <div className="vc-search">
      <div>
        <h1>Search</h1>

        <div className="vc-search-container">
          <div className="vc-search-items vc-search-poi">
            <h3>Point of Interest</h3>
            <label>
              <input
                type="text"
                placeholder="15 Broadway, Ultimo NSW 2007"
                className="vc-search-input"
              />
              <span>
                <TiDeleteOutline size="1.5em" />
              </span>
            </label>
          </div>

          <div className="vc-search-items">
            <h3>Search Radius (km)</h3>
            <label>
              <input type="range" />
              <span>20</span>
            </label>
          </div>

          <div className="vc-search-items">
            <h3>Populatin Density</h3>
            <label>
              <input type="range" />
              <span>Low</span>
            </label>
          </div>

          <div className="vc-search-items">
            <h3>Time of Day</h3>
            <label>
              <input type="range" />
              <span>5pm</span>
            </label>
          </div>

          <div className="vc-search-show">
            <h3>Show</h3>
            <div className="vc-search-show-container">
              <label>
                <input type="checkbox" /> All
              </label>
              <label>
                <input type="checkbox" /> Intersections
              </label>
              <label>
                <input type="checkbox" /> Speed Zones
              </label>
              <label>
                <input type="checkbox" /> Highways
              </label>
            </div>
          </div>
        </div>
      </div>

      <button className="vc-search-refine">
        Refine Search <BiRightArrowAlt />
      </button>
    </div>
  )
}

export default Search
