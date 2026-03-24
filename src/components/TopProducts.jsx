function formatPrice(price) {
  if (!price) {
    return 'Contact sales'
  }

  const numericPrice = Number(price)

  if (Number.isNaN(numericPrice)) {
    return price
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(numericPrice)
}

export function TopProducts({ products, isLoading, error }) {
  return (
    <section className="section" id="featured">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Top products</h2>
            <p className="section-copy">Loaded from `GET /api/products?featured=true` and kept intentionally narrow for the first SPA milestone.</p>
          </div>
          <span className="section-link">{products.length} featured</span>
        </div>

        {isLoading ? (
          <div className="loading-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="skeleton" key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="empty-state">Unable to load featured products from the backend API.</div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id ?? product.slug}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div>
                  <strong>{product.name}</strong>
                  <p className="section-copy" style={{ marginTop: '0.5rem' }}>
                    {product.description}
                  </p>
                </div>
                <div className="product-price">{formatPrice(product.price)}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
