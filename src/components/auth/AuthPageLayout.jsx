import { Link } from 'react-router-dom'
import cynaLogo from '../../assets/logo-icon-transparent.png'

export function AuthPageLayout({
  eyebrow,
  title,
  copy,
  benefits,
  cardTitle,
  cardCopy,
  footerPrompt,
  footerActionLabel,
  footerActionTo,
  children,
}) {
  return (
    <section className="section auth-page">
      <div className="container">
        <div className="auth-layout">
          <aside className="auth-showcase panel">
            <Link className="auth-brand" to="/">
              <img src={cynaLogo} alt="" />
              <span>CYNA</span>
            </Link>

            <span className="eyebrow">{eyebrow}</span>
            <h1 className="section-title auth-title">{title}</h1>
            <p className="section-copy auth-copy">{copy}</p>

            <div className="auth-benefits">
              {benefits.map((benefit) => (
                <div className="auth-benefit" key={benefit}>
                  <span className="auth-benefit-dot" aria-hidden="true" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="auth-card panel">
            <div className="auth-card-head">
              <h2>{cardTitle}</h2>
              <p>{cardCopy}</p>
            </div>

            {children}

            <p className="auth-switch">
              {footerPrompt} <Link to={footerActionTo}>{footerActionLabel}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
