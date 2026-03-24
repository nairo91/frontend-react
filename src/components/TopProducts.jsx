import { Link } from 'react-router-dom'
import { siteText } from '../content/siteText'
import { resolveMediaUrl } from '../utils/media'
import { ResourceState } from './ResourceState'
import { SectionHeading } from './SectionHeading'

function formatPrice(price) {
  if (price === null || price === undefined || price === '') {
    return siteText.home.products.fallbackPrice
  }

  const numericPrice = Number(price)

  if (Number.isNaN(numericPrice)) {
    return price
  }

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(numericPrice)
}

export function TopProducts({ products, isLoading, error }) {
  const section = siteText.home.products

  return (
    <section className="section" id="featured">
      <div className="container">
        <SectionHeading
          eyebrow="Selection du moment"
          title={section.title}
          copy={section.copy}
          meta={<Link to="/products">{section.meta}</Link>}
        />

        <ResourceState
          isLoading={isLoading}
          error={error}
          skeletonCount={4}
          loadingClassName="loading-grid"
          errorMessage={section.error}
        >
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id ?? product.slug}>
                <Link className="product-card-link" to="/products">
                  <div className="product-media">
                    <img
                      src={resolveMediaUrl(product.image, product.name)}
                      alt={`Illustration du produit ${product.name}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-body">
                    <div className="product-tag">{product.category?.name ?? section.fallbackCategory}</div>
                    <strong>{product.name}</strong>
                    <p className="section-copy product-copy">{product.description}</p>
                  </div>
                  <div className="product-footer-row">
                    <div className="product-price">{formatPrice(product.price)}</div>
                    <span className="product-status">{section.status}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </ResourceState>
      </div>
    </section>
  )
}
