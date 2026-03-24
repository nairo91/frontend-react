import { Link } from 'react-router-dom'
import { ResourceState } from './ResourceState'
import { SectionHeading } from './SectionHeading'

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
        <SectionHeading
          title="Top products"
          copy="Loaded from `GET /api/products?featured=true` to keep the homepage fast and focused."
          meta={<Link to="/products">See product route</Link>}
        />

        <ResourceState
          isLoading={isLoading}
          error={error}
          skeletonCount={4}
          loadingClassName="loading-grid"
          errorMessage="Unable to load featured products from the backend API."
        >
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id ?? product.slug}>
                <div className="product-media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div className="product-tag">{product.category?.name ?? 'Featured offer'}</div>
                  <strong>{product.name}</strong>
                  <p className="section-copy product-copy">{product.description}</p>
                </div>
                <div className="product-footer-row">
                  <div className="product-price">{formatPrice(product.price)}</div>
                  <span className="product-status">Featured</span>
                </div>
              </article>
            ))}
          </div>
        </ResourceState>
      </div>
    </section>
  )
}
