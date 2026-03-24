export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div>
          <strong>CYNA</strong>
          <p className="section-copy" style={{ marginTop: '0.5rem' }}>
            First React storefront iteration, powered by a Symfony API backend only.
          </p>
        </div>

        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href="#categories">Categories</a>
          <a href="#featured">Top products</a>
        </div>
      </div>
    </footer>
  )
}
