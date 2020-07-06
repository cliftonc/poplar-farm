import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import rightmove from '../img/social/rightmoveDark.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h1 style={{fontWeight: '900'}}>Poplar Farm</h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a className="navbar-item" title="rightmove" target="_new" href="https://www.rightmove.co.uk/property-for-sale/property-90919028.html">
                 <img
                  src={rightmove}
                  alt="View Poplar Farm on rightmove"
                  style={{width: "7em"}}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
