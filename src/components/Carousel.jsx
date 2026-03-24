import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'

const slides = [
  {
    eyebrow: 'SOC offer',
    title: '24/7 surveillance and guided response',
    copy: 'Analysts, playbooks and reporting combined into a managed security layer that can scale with the catalog.',
    cta: 'Explore managed SOC',
    panelTitle: 'Included',
    panelCopy: 'Playbooks, reporting and escalation workflows.',
  },
  {
    eyebrow: 'EDR Pro',
    title: 'Endpoint detection with faster containment',
    copy: 'Behavioral detection, guided remediation and clearer visibility for lean security teams.',
    cta: 'Compare EDR plans',
    panelTitle: 'Expected gain',
    panelCopy: 'Reduce time-to-triage on endpoint incidents.',
  },
  {
    eyebrow: 'XDR Suite',
    title: 'Cross-source correlation without dashboard overload',
    copy: 'A focused product story for teams that need one operational layer across multiple signal sources.',
    cta: 'Request a demo',
    panelTitle: 'Best fit',
    panelCopy: 'IT and SecOps teams running mixed environments.',
  },
]

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToNext()
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section">
      <div className="container carousel">
        <SectionHeading
          title="Spotlight"
          copy="Static marketing blocks for now, organized as a reusable carousel module with explicit navigation."
          meta={`${activeIndex + 1} / ${slides.length}`}
        />

        <div className="carousel-window panel">
          <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide) => (
              <div className="carousel-slide" key={slide.title}>
                <div className="slide-card">
                  <div className="slide-copy">
                    <span className="eyebrow">{slide.eyebrow}</span>
                    <h3 className="section-title slide-title">{slide.title}</h3>
                    <p className="section-copy slide-copy-text">{slide.copy}</p>
                    <div className="hero-actions">
                      <Link className="button-primary" to="/products">
                        {slide.cta}
                      </Link>
                    </div>
                  </div>

                  <div className="slide-panel">
                    <strong>{slide.panelTitle}</strong>
                    <p className="section-copy slide-panel-copy">{slide.panelCopy}</p>
                    <div className="slide-signal">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow" type="button" onClick={goToPrevious} aria-label="Show previous slide">
            ←
          </button>

          <div className="carousel-dots" aria-label="Carousel navigation">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={index === activeIndex ? 'is-active' : ''}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button className="carousel-arrow" type="button" onClick={goToNext} aria-label="Show next slide">
            →
          </button>
        </div>
      </div>
    </section>
  )
}
