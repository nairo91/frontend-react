const DEFAULT_API_BASE_URL = 'http://127.0.0.1:8000'

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? DEFAULT_API_BASE_URL

async function parseResponse(response) {
  const contentType = response.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    return response.json().catch(() => null)
  }

  return response.text().catch(() => '')
}

export async function apiRequest(path, options = {}) {
  const { method = 'GET', body, headers = {} } = options

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  const payload = await parseResponse(response)

  if (!response.ok) {
    const errorMessage =
      payload?.message ?? payload?.error ?? payload?.detail ?? `API request failed with status ${response.status}`
    const error = new Error(errorMessage)
    error.status = response.status
    error.payload = payload
    throw error
  }

  return payload
}

export async function apiGet(path) {
  return apiRequest(path)
}

export async function apiPost(path, body, headers) {
  return apiRequest(path, {
    method: 'POST',
    body,
    headers,
  })
}
