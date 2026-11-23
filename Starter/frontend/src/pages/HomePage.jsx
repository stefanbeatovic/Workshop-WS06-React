import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard.jsx'
import { postsApiUrl } from '../api.js'

function HomePage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPosts() {
      try {
        const response = await fetch(postsApiUrl(), {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }

        const data = await response.json()
        setPosts(data)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchPosts()
    return () => controller.abort()
  }, [])

  if (loading) return <p className="status-msg">Loading posts…</p>
  if (error) return <p className="status-msg error">{error}</p>

  return (
    <div className="blog-page">
      <div className="page-heading">
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">All posts</h1>
      </div>

      {posts.length === 0 ? (
        <p className="status-msg">No posts yet.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HomePage
