import { Link } from 'react-router-dom'
import { siteText } from '../content/siteText'

export function NotFoundPage() {
  const page = siteText.pages.notFound

  return (
    <section className="section page-placeholder">
      <div className="container">
        <div className="placeholder-card panel">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1 className="section-title placeholder-title">{page.title}</h1>
          <p className="section-copy placeholder-copy">{page.copy}</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/">
              {page.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
