import { Link } from 'react-router-dom'
import logo from '../imgs/logo1.png'
import '../css/NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-inner">
          <header>
            <Link to={'/'}>
              <img src={logo} alt="" className="logo" />
            </Link>
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
