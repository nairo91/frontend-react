import { apiGet } from './http'

export function getCategories() {
  return apiGet('/api/categories')
}

export function getFeaturedProducts() {
  return apiGet('/api/products?featured=true')
}
