import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section">
      <div className="container carousel">
        <div className="section-head">
          <div>
            <h2 className="section-title">Spotlight</h2>
            <p className="section-copy">Static marketing content for now, ready to be replaced later if a real API need appears.</p>
          </div>
        </div>

        <div className="carousel-window panel">
          <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide) => (
              <div className="carousel-slide" key={slide.title}>
                <div className="slide-card">
                  <div>
                    <span className="eyebrow">{slide.eyebrow}</span>
                    <h3 className="section-title" style={{ marginTop: '1rem' }}>
                      {slide.title}
                    </h3>
                    <p className="section-copy" style={{ marginTop: '1rem' }}>
                      {slide.copy}
                    </p>
                    <div className="hero-actions">
                      <a className="button-primary" href="#featured">
                        {slide.cta}
                      </a>
                    </div>
                  </div>

                  <div className="slide-panel">
                    <strong>{slide.panelTitle}</strong>
                    <p className="section-copy" style={{ marginTop: '0.6rem' }}>
                      {slide.panelCopy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </section>
  )
}
