import "./Navbar.css"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [investOpen, setInvestOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          <div className="logo-icon" />
          <span>MetaLife AI</span>
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>

          {/* INVEST DROPDOWN */}
          <div
            className={`nav-dropdown ${investOpen ? "open" : ""}`}
            onMouseEnter={() => setInvestOpen(true)}
            onMouseLeave={() => setInvestOpen(false)}
          >
            <span className="dropdown-trigger">
              Invest
              <i className="chevron" />
            </span>

            <div className="dropdown-menu">
              <NavLink to="/ico" className="dropdown-item">
                <strong>ICO</strong>
                <span>Participate in META token sale</span>
              </NavLink>

              <NavLink to="/equity" className="dropdown-item">
                <strong>Equity Investment</strong>
                <span>Own a stake in MetaLife AI</span>
              </NavLink>
            </div>
          </div>

          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions">
          <NavLink to="/signup" className="link-btn">Sign Up</NavLink>
          <NavLink to="/ico" className="btn primary">Buy Tokens</NavLink>

          {/* MOBILE */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar
