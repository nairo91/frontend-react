import { apiPost } from './http'

export const AUTH_TOKEN_STORAGE_KEY = 'cyna_auth_token'

export async function loginWithPassword(credentials) {
  return apiPost('/api/login_check', credentials)
}

export function saveAuthToken(token, rememberMe = true) {
  if (typeof window === 'undefined') {
    return
  }

  clearAuthToken()

  if (rememberMe) {
    window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
    return
  }

  window.sessionStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
}

export function getAuthToken() {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) ?? window.sessionStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
}

export function clearAuthToken() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
  window.sessionStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
}
