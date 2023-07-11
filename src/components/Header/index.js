import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

const Header = () => (
  <div className="nav-container">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        model
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <BsInfoCircleFill />
          </button>
        }
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link onClick={() => close()} to="/">
                  <AiFillHome size="36" />
                  <P className="content">Home</P>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link onClick={() => close()} to="/">
                  <BsInfoCircleFill size="36" />
                  <P className="content">About</P>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default withRouter(Header)
