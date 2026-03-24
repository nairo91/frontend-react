import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>CYNA</strong>
          <p className="section-copy footer-copy">
            React serves the public website. Symfony serves JSON only. This footer is part of the shared SPA shell and
            will stay reusable as routes expand.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">Products</Link>
        </div>
      </div>
    </footer>
  )
}
