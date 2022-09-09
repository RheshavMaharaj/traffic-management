import { Link } from 'react-router-dom'
import logo from '../imgs/logo1.png'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-inner">
          <header>
            <a href="#">
              <img src={logo} alt="" className="logo" />
            </a>
          </header>

          <h1>Error 404 - The page you looking for doesn't exists</h1>

          <Link to={'/'} className="primary-btn">
            Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
