import logo_icon from "../imgs/logo_icon.png"
import { FiSearch, FiStar, FiAlertCircle } from "react-icons/fi"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import Search from "./Search"
import Poi from "./Poi"
import SavedCongestion from "./SavedCongestion"
import { Link } from "react-router-dom"
import React, { useContext, useState } from "react"
import "../css/Sidebar.css"
import Map from "./Map"
import Modal from "./Modal"
import { GlobalContext } from "../context/GlobalState"

const ViewCongestion = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showStar, setShowStar] = useState(false)
  const [showShow, setShowShow] = useState(false)

  const { showModal, currentCongestion } = useContext(GlobalContext)

  function showSidebar(e: React.MouseEvent) {
    const target = e.target as HTMLInputElement;
    if (target && target.id === "icon-search") {
      setShowSearch(true)
      setShowAlert(false)
      setShowStar(false)
      setShowShow(true)
    } else if (target && target.id === "icon-alert") {
      setShowSearch(false)
      setShowAlert(true)
      setShowStar(false)
      setShowShow(true)
    } else if (target && target.id === "icon-star") {
      setShowSearch(false)
      setShowAlert(false)
      setShowStar(true)
      setShowShow(true)
    }
  }

  return (
    <div className="vc">
      <div className={showModal ? "vc-container addBlur" : "vc-container"}>
        <div className="vc-navbar">
          <div className="vc-nav-menu">
            <Link to="/">
              <img src={logo_icon} alt="logo" className="vc-nav-logo" />
            </Link>
            <button>
              <FiSearch
                size="2.5em"
                className="vc-nav-icons"
                id="icon-search"
                onClick={showSidebar}
              />
            </button>
            <button>
              <FiAlertCircle
                size="2.5em"
                className="vc-nav-icons"
                id="icon-alert"
                onClick={showSidebar}
              />
            </button>
            <button>
              <FiStar
                size="2.5em"
                className="vc-nav-icons"
                id="icon-star"
                onClick={showSidebar}
              />
            </button>
          </div>
          <div className="vc-nav-toggle">
            <button id="icon-show" onClick={() => setShowShow(!showShow)}>
              {showShow ? (
                <MdArrowBackIos size="2em" className="vc-nav-icons" />
              ) : (
                <MdArrowForwardIos size="2em" className="vc-nav-icons" />
              )}
            </button>
          </div>
        </div>

        <div
          className="vc-show"
          style={{ display: showShow === true ? "block" : "none" }}
        >
          {showSearch && <Search />}
          {showAlert && <Poi />}
          {showStar && <SavedCongestion />}
        </div>
        <Map />
      </div>
      {showModal && <Modal congestion={currentCongestion} />}
    </div>
  )
}

export default ViewCongestion
