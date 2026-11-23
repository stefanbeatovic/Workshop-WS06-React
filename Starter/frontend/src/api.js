const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export function postsApiUrl(path = '') {
  return `${API_BASE_URL}/api/posts${path}`
}
