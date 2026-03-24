import { siteText } from '../content/siteText'

export function Hero() {
  const intro = siteText.home.intro

  return (
    <section className="section intro-section" aria-labelledby="intro-title">
      <div className="container">
        <div className="intro-band panel">
          <div className="intro-copy">
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="section-title" id="intro-title">
              {intro.title}
            </h2>
            <p className="section-copy intro-text">{intro.copy}</p>
          </div>

          <div className="intro-points" aria-label="Points cles CYNA">
            {intro.points.map((point) => (
              <article className="intro-card" key={point.title}>
                <strong>{point.title}</strong>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
