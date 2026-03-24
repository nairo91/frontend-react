import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cynaMark from '../assets/cyna-mark.svg'
import { siteText } from '../content/siteText'

export function Navbar() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleSearch = (event) => {
    event.preventDefault()
  }

  const navLinkClassName = ({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink className="nav-brand" to="/" aria-label={siteText.nav.brandLabel}>
          <img src={cynaMark} alt="" />
          <span>{siteText.nav.brand}</span>
        </NavLink>

        <button
          className="nav-burger"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Fermer le menu principal' : 'Ouvrir le menu principal'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={isMenuOpen ? 'nav-panel is-open' : 'nav-panel'}
          id="primary-navigation"
          aria-label="Navigation principale"
        >
          <div className="nav-links">
            {siteText.nav.primaryLinks.map((link) => (
              <NavLink className={navLinkClassName} key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-secondary-links">
            {siteText.nav.authLinks.map((link) => (
              <a className="nav-aux-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-mobile-extra">
            {siteText.nav.mobileLinks.map((link) => (
              <a className="nav-mobile-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="nav-actions">
          <form className="nav-search" onSubmit={handleSearch} role="search" aria-label="Recherche CYNA">
            <input type="search" placeholder={siteText.nav.searchPlaceholder} aria-label="Rechercher sur CYNA" />
            <button className="nav-search-button" type="submit">
              {siteText.nav.searchButton}
            </button>
            <span className="visually-hidden">{siteText.nav.searchHint}</span>
          </form>

          <button className="cart-button" type="button" title={siteText.nav.cartHint}>
            <span aria-hidden="true">+</span>
            {siteText.nav.cartLabel}
          </button>
        </div>
      </div>
    </header>
  )
}
