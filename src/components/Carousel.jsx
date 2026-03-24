import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteText } from '../content/siteText'

export function Carousel() {
  const slides = siteText.home.slides
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section className="hero-carousel" id="top" aria-label="Carrousel d'accueil CYNA">
      <div className="container carousel">
        <div className="carousel-window panel">
          <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide) => (
              <div className="carousel-slide" key={slide.title}>
                <article className="slide-card">
                  <div className="slide-copy">
                    <span className="eyebrow">{slide.eyebrow}</span>
                    <h1 className="carousel-title slide-title">{slide.title}</h1>
                    <p className="section-copy slide-copy-text">{slide.copy}</p>
                    <div className="carousel-actions">
                      <Link className="button-primary" to={slide.to}>
                        {slide.cta}
                      </Link>
                    </div>
                  </div>

                  <div className="slide-visual" aria-hidden="true">
                    <div className="slide-visual-surface">
                      <strong>{slide.visualTitle}</strong>
                      <ul className="slide-visual-list">
                        {slide.visualItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="slide-signal">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow" type="button" onClick={goToPrevious} aria-label="Afficher la slide precedente">
            {"\u2190"}
          </button>

          <div className="carousel-dots" aria-label="Navigation du carrousel">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === activeIndex ? 'is-active' : ''}
                type="button"
                aria-label={`Afficher la slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button className="carousel-arrow" type="button" onClick={goToNext} aria-label="Afficher la slide suivante">
            {"\u2192"}
          </button>
        </div>

        <p className="carousel-caption">
          CYNA vous aide a explorer des offres de cybersEcurite plus lisibles, plus comparables et mieux adaptees a
          votre contexte d&apos;entreprise.
        </p>
      </div>
    </section>
  )
}
