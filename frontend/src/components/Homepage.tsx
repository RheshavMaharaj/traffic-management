import logo from '../imgs/logo1.png'
import Button from './Button'

const homepage = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero">
          <header>
            <a href="#">
              <img src={logo} alt="" className="logo" />
            </a>
          </header>
          <h1 className="hero-h1">
            Traffic Congestion Prediction Using Powerful AI
          </h1>
          <p className="hero-p">
            Predict traffic congestion before they happen, a UTS Software
            Engineering Studio Project
          </p>
          <div className="hero-links">
            <Button
              href={'#'}
              className={'hero-getStarted'}
              text={'Get Started'}
            />

            <Button
              href={'#'}
              className={'hero-findOutHow'}
              text={'Find out how'}
            />
          </div>
        </div>

        <div className="section-search">
          <div className="search-container">
            <div className="search-inner-container">
              <div className="search-input">
                <label htmlFor="point-of-interest">Point of Interest</label>
                <input type="text" placeholder="15 Broadway, Ultimo NSW 2007" />
              </div>

              <div className="search-filter">
                <div className="search-filter-item">
                  <label htmlFor="search-radius">Search Radius (km)</label>
                  <input type="range" min="5" max="25" step="5" />
                </div>
                <div className="search-filter-item">
                  <label htmlFor="population-density">Population Density</label>
                  <input type="range" min="1" max="3" step="1" />
                </div>
                <div className="search-filter-item">
                  <label htmlFor="time-of-day">Time of Day</label>
                  <input type="range" min="1" max="9" step="1" />
                </div>
              </div>

              <div className="search-sidebar">
                <label htmlFor="show" className="title">
                  Show
                </label>
                <div className="search-sidebar-item">
                  <input type="checkbox" name="all" />
                  <label htmlFor="all">All</label>
                </div>
                <div className="search-sidebar-item">
                  <input type="checkbox" name="intersections" />
                  <label htmlFor="intersections">Intersections</label>
                </div>
                <div className="search-sidebar-item">
                  <input type="checkbox" name="speed-zones" />
                  <label htmlFor="speed-zones">Speed Zones</label>
                </div>
                <div className="search-sidebar-item">
                  <input type="checkbox" name="highways" />
                  <label htmlFor="highways">Highways</label>
                </div>
              </div>

              <Button
                href={'#'}
                className={'view-congestion-map'}
                text={'View Congestion Map'}
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>version 1.0.0</p>
          <p>Build for 41129 Software Innovation Studio by Team 9</p>
        </div>
      </footer>
    </section>
  )
}

export default homepage
