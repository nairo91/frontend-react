import { Link } from 'react-router-dom'

export function CategoriesPage() {
  return (
    <section className="section page-placeholder">
      <div className="container">
        <div className="placeholder-card panel">
          <span className="eyebrow">Route placeholder</span>
          <h1 className="section-title placeholder-title">Categories route is ready for the next SPA slice</h1>
          <p className="section-copy placeholder-copy">
            The route exists and is integrated in the shared shell, but no heavy catalog logic has been added yet. The
            homepage already consumes category data from the backend API.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/">
              Back to homepage
            </Link>
            <Link className="button-secondary" to="/products">
              Open products placeholder
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
