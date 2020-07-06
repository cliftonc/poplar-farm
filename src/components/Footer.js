import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import rightmove from '../img/social/rightmove.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h1 style={{fontWeight: '900', color: 'white'}}>Poplar Farm</h1>
          <a title="rightmove" target="_new" href="https://www.rightmove.co.uk/property-for-sale/property-90919028.html">
            <img
              src={rightmove}
              alt="View Poplar Farm on rightmove"
              style={{width: "20em"}}
            />
          </a>
        </div>
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
