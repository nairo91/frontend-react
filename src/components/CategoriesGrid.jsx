export function CategoriesGrid({ categories, isLoading, error }) {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Categories</h2>
            <p className="section-copy">Loaded from Symfony API Platform through the headless backend.</p>
          </div>
          <span className="section-link">{categories.length} available</span>
        </div>

        {isLoading ? (
          <div className="loading-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="skeleton" key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="empty-state">Unable to load categories from the backend API.</div>
        ) : (
          <div className="grid-categories">
            {categories.map((category) => (
              <article className="category-card" key={category.id ?? category.slug}>
                <img src={category.image} alt={category.name} loading="lazy" />
                <div>
                  <strong>{category.name}</strong>
                  <p className="section-copy" style={{ marginTop: '0.5rem' }}>
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
