import { Link } from 'react-router-dom'

export function ProductsPage() {
  return (
    <section className="section page-placeholder">
      <div className="container">
        <div className="placeholder-card panel">
          <span className="eyebrow">Route placeholder</span>
          <h1 className="section-title placeholder-title">Products route is staged for the next iteration</h1>
          <p className="section-copy placeholder-copy">
            The shared shell and router are already in place. This route can later evolve into a real product listing
            page backed by `/api/products` without changing the core SPA structure.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/">
              Back to homepage
            </Link>
            <Link className="button-secondary" to="/categories">
              Open categories placeholder
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
