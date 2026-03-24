export function SectionHeading({ eyebrow, title, copy, meta, align = 'default' }) {
  const className = align === 'compact' ? 'section-head section-head-compact' : 'section-head'

  return (
    <div className={className}>
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
      {meta ? <div className="section-link">{meta}</div> : null}
    </div>
  )
}
