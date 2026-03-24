export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <article className="hero-copy panel">
          <span className="eyebrow">Managed security, built for operating teams</span>
          <h1 className="hero-title">
            Protect your business with <span>CYNA</span>
          </h1>
          <p className="hero-text">
            SOC, EDR and XDR services delivered as a clean SaaS storefront. This first React version keeps the
            marketing story simple while the Symfony backend stays focused on JSON APIs only.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#featured">
              Discover top products
            </a>
            <a className="button-secondary" href="#categories">
              Browse categories
            </a>
          </div>

          <div className="hero-pills">
            <span className="pill">Fast onboarding</span>
            <span className="pill">24/7 supervision</span>
            <span className="pill">Actionable reporting</span>
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
              <h3>Alerts processed</h3>
              <span>24h</span>
            </div>
            <p>12 alerts, 0 critical, 2 under investigation.</p>
          </section>

          <section className="status-card">
            <h3>Recommended action</h3>
            <p>Roll out MFA on every privileged account before expanding the storefront.</p>
          </section>
        </aside>
      </div>
    </section>
  )
}
