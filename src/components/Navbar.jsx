import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import cynaLogo from '../assets/logo-icon-transparent.png'
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

  const renderSearchForm = (className) => (
    <form className={className} onSubmit={handleSearch} role="search" aria-label="Recherche CYNA">
      <input type="search" placeholder={siteText.nav.searchPlaceholder} aria-label="Rechercher sur CYNA" />
      <button className="nav-search-button" type="submit">
        {siteText.nav.searchButton}
      </button>
      <span className="visually-hidden">{siteText.nav.searchHint}</span>
    </form>
  )

  const renderSecondaryLink = (link, className) => {
    if (link.to) {
      return (
        <Link className={className} to={link.to} key={link.label}>
          {link.label}
        </Link>
      )
    }

    return (
      <a className={className} href={link.href} key={link.label}>
        {link.label}
      </a>
    )
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-top">
          <div className="nav-start">
            <NavLink className="nav-brand" to="/" aria-label={siteText.nav.brandLabel}>
              <img src={cynaLogo} alt="" />
              <span>{siteText.nav.brand}</span>
            </NavLink>

            <nav className="nav-primary nav-primary-desktop" aria-label="Navigation principale">
              {siteText.nav.primaryLinks.map((link) => (
                <NavLink className={navLinkClassName} key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="nav-end">
            {renderSearchForm('nav-search nav-search-desktop')}

            <div className="nav-secondary-links nav-secondary-desktop">
              {siteText.nav.authLinks.map((link) => renderSecondaryLink(link, 'nav-aux-link'))}
            </div>

            <button className="cart-button cart-button-desktop" type="button" title={siteText.nav.cartHint}>
              <span aria-hidden="true">+</span>
              {siteText.nav.cartLabel}
            </button>

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
          </div>
        </div>

        <div className={isMenuOpen ? 'nav-panel is-open' : 'nav-panel'} id="primary-navigation">
          {renderSearchForm('nav-search nav-search-mobile')}

          <nav className="nav-primary nav-primary-mobile" aria-label="Navigation principale mobile">
            {siteText.nav.primaryLinks.map((link) => (
              <NavLink className={navLinkClassName} key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-secondary-links nav-secondary-mobile">
            {siteText.nav.authLinks.map((link) => renderSecondaryLink(link, 'nav-aux-link'))}
          </div>

          <button className="cart-button cart-button-mobile" type="button" title={siteText.nav.cartHint}>
            <span aria-hidden="true">+</span>
            {siteText.nav.cartLabel}
          </button>

          <div className="nav-mobile-extra">
            {siteText.nav.mobileLinks.map((link) => renderSecondaryLink(link, 'nav-mobile-link'))}
          </div>
        </div>
      </div>
    </header>
  )
}
