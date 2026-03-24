import cynaMark from '../assets/cyna-mark.svg'

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top" aria-label="CYNA home">
          <img src={cynaMark} alt="" />
          <span>CYNA</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          <a href="#categories">Categories</a>
          <a href="#featured">Top products</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-search">
          <input type="search" placeholder="Search a cybersecurity service..." aria-label="Search" />
        </div>
      </div>
    </header>
  )
}
