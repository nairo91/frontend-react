import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section page-placeholder">
      <div className="container">
        <div className="placeholder-card panel">
          <span className="eyebrow">404</span>
          <h1 className="section-title placeholder-title">This route does not exist yet</h1>
          <p className="section-copy placeholder-copy">
            The SPA is intentionally minimal for now. Use the homepage to browse the first connected sections.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
