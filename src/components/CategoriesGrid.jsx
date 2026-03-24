import { Link } from 'react-router-dom'
import { siteText } from '../content/siteText'
import { resolveMediaUrl } from '../utils/media'
import { ResourceState } from './ResourceState'
import { SectionHeading } from './SectionHeading'

export function CategoriesGrid({ categories, isLoading, error }) {
  const section = siteText.home.categories

  return (
    <section className="section" id="categories">
      <div className="container">
        <SectionHeading
          eyebrow="Catalogue CYNA"
          title={section.title}
          copy={section.copy}
          meta={<Link to="/categories">{section.meta}</Link>}
        />

        <ResourceState
          isLoading={isLoading}
          error={error}
          skeletonCount={6}
          loadingClassName="loading-grid loading-grid-categories"
          errorMessage={section.error}
        >
          <div className="grid-categories">
            {categories.map((category) => (
              <article className="category-card" key={category.id ?? category.slug}>
                <Link className="category-card-link" to="/categories">
                  <div className="category-media">
                    <img
                      src={resolveMediaUrl(category.image, category.name)}
                      alt={`Illustration de la categorie ${category.name}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="category-body">
                    <strong>{category.name}</strong>
                    <p className="section-copy category-copy">{category.description ?? section.fallbackDescription}</p>
                  </div>
                  <span className="category-chip">{section.chip}</span>
                </Link>
              </article>
            ))}
          </div>
        </ResourceState>
      </div>
    </section>
  )
}
