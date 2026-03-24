import { useEffect, useState } from 'react'
import { getCategories, getFeaturedProducts } from '../api/catalogApi'
import { Carousel } from '../components/Carousel'
import { CategoriesGrid } from '../components/CategoriesGrid'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
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
    <div className="page-shell">
      <Navbar />
      <Hero />
      <Carousel />

      <section className="section">
        <div className="container">
          <div className="feature-band panel">
            <span className="eyebrow">Headless storefront baseline</span>
            <h2 className="section-title" style={{ marginTop: '1rem' }}>
              Symfony serves JSON, React serves the public web experience
            </h2>
            <p className="section-copy" style={{ marginTop: '1rem' }}>
              This page only consumes public API endpoints already available in the backend. No Twig rendering, no
              embedded React, and no hybrid public frontend.
            </p>
          </div>
        </div>
      </section>

      <CategoriesGrid categories={categories} isLoading={isCategoriesLoading} error={categoriesError} />
      <TopProducts products={featuredProducts} isLoading={isProductsLoading} error={productsError} />
      <Footer />
    </div>
  )
}
