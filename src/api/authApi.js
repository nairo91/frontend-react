import { apiPost } from './http'

export const AUTH_TOKEN_STORAGE_KEY = 'cyna_auth_token'

export async function loginWithPassword(credentials) {
  return apiPost('/api/login_check', credentials)
}

export function saveAuthToken(token) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
}

export function getAuthToken() {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
}

export function clearAuthToken() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
}
