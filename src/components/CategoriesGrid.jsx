import { Link } from 'react-router-dom'
import { ResourceState } from './ResourceState'
import { SectionHeading } from './SectionHeading'

export function CategoriesGrid({ categories, isLoading, error }) {
  return (
    <section className="section" id="categories">
      <div className="container">
        <SectionHeading
          title="Categories"
          copy="Loaded from Symfony API Platform through the headless backend."
          meta={<Link to="/categories">Browse all</Link>}
        />

        <ResourceState
          isLoading={isLoading}
          error={error}
          skeletonCount={6}
          loadingClassName="loading-grid loading-grid-categories"
          errorMessage="Unable to load categories from the backend API."
        >
          <div className="grid-categories">
            {categories.map((category) => (
              <article className="category-card" key={category.id ?? category.slug}>
                <div className="category-media">
                  <img src={category.image} alt={category.name} loading="lazy" />
                </div>
                <div className="category-body">
                  <strong>{category.name}</strong>
                  <p className="section-copy category-copy">{category.description}</p>
                </div>
                <span className="category-chip">{category.slug}</span>
              </article>
            ))}
          </div>
        </ResourceState>
      </div>
    </section>
  )
}
