import { useEffect, useState } from 'react'
import { getCategories, getFeaturedProducts } from '../api/catalogApi'
import { Carousel } from '../components/Carousel'
import { CategoriesGrid } from '../components/CategoriesGrid'
import { Hero } from '../components/Hero'
import { TopProducts } from '../components/TopProducts'

export function HomePage() {
  const [categories, setCategories] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [categoriesError, setCategoriesError] = useState(false)
  const [productsError, setProductsError] = useState(false)
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true)
  const [isProductsLoading, setIsProductsLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false

    getCategories()
      .then((data) => {
        if (!isCancelled) {
          setCategoriesError(false)
          setCategories(data)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setCategoriesError(true)
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setIsCategoriesLoading(false)
        }
      })

    getFeaturedProducts()
      .then((data) => {
        if (!isCancelled) {
          setProductsError(false)
          setFeaturedProducts(data)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setProductsError(true)
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setIsProductsLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <>
      <Hero />
      <Carousel />

      <section className="section">
        <div className="container">
          <div className="feature-band panel">
            <span className="eyebrow">Headless storefront baseline</span>
            <h2 className="section-title feature-title">
              Symfony serves JSON, React serves the public web experience
            </h2>
            <p className="section-copy feature-copy">
              This page only consumes public API endpoints already available in the backend. No Twig rendering, no
              embedded React, and no hybrid public frontend.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <strong>SPA-ready shell</strong>
                <p>Navbar, footer and routes are now shared across pages.</p>
              </div>
              <div className="feature-card">
                <strong>Reusable resource states</strong>
                <p>Loading and error rendering is now handled consistently across API-driven sections.</p>
              </div>
              <div className="feature-card">
                <strong>Future routes prepared</strong>
                <p>The project can now grow into products and categories pages without reshaping the homepage layout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoriesGrid categories={categories} isLoading={isCategoriesLoading} error={categoriesError} />
      <TopProducts products={featuredProducts} isLoading={isProductsLoading} error={productsError} />
    </>
  )
}
