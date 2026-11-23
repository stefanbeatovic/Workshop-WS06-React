const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  'https://workshop-ws06-react-backend.onrender.com'
).replace(/\/$/, '')

export function postsApiUrl(path = '') {
  return `${API_BASE_URL}/api/posts${path}`
}
