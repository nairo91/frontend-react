import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <article className="hero-copy panel">
          <span className="eyebrow">Managed cybersecurity for operating teams</span>
          <div className="hero-badge-strip">
            <span>API-first storefront</span>
            <span>React SPA</span>
            <span>Symfony backend</span>
          </div>
          <h1 className="hero-title">
            Launch a cleaner security storefront with <span>CYNA</span>
          </h1>
          <p className="hero-text">
            A dedicated React public frontend backed by a Symfony JSON API. This baseline keeps the catalog visible
            while the project grows into a more complete SPA.
          </p>

          <div className="hero-actions">
            <Link className="button-primary" to="/products">
              View products
            </Link>
            <Link className="button-secondary" to="/categories">
              Explore categories
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat panel">
              <strong>Headless-ready</strong>
              <span>Public UI and API are fully separated.</span>
            </div>
            <div className="hero-stat panel">
              <strong>Featured offers</strong>
              <span>Driven from `/api/products?featured=true`.</span>
            </div>
            <div className="hero-stat panel">
              <strong>Reusable sections</strong>
              <span>Structured to support future routes.</span>
            </div>
          </div>
        </article>

        <aside className="hero-status panel" aria-label="Security overview">
          <div className="status-row">
            <strong>Security overview</strong>
            <span className="status-ok">Healthy</span>
          </div>

          <section className="status-card">
            <div className="status-row">
              <h3>Protected endpoints</h3>
              <span>128</span>
            </div>
            <div className="progress-bar" style={{ '--progress': '78%' }}>
              <span />
            </div>
          </section>

          <section className="status-card">
            <div className="status-row">
              <h3>Response coverage</h3>
              <span>24/7</span>
            </div>
            <p>Managed triage, escalation and remediation guidance across core service lines.</p>
          </section>

          <section className="status-card">
            <h3>Next phase</h3>
            <p>Extend the SPA into product and category pages without reintroducing server-rendered public views.</p>
          </section>
        </aside>
      </div>
    </section>
  )
}
