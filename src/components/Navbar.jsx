import { NavLink } from 'react-router-dom'
import cynaMark from '../assets/cyna-mark.svg'

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink className="nav-brand" to="/" aria-label="CYNA home">
          <img src={cynaMark} alt="" />
          <span>CYNA</span>
        </NavLink>

        <nav className="nav-links" aria-label="Main">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')} to="/categories">
            Categories
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')} to="/products">
            Products
          </NavLink>
        </nav>

        <div className="nav-search">
          <input type="search" placeholder="Search a service..." aria-label="Search" />
        </div>
      </div>
    </header>
  )
}
