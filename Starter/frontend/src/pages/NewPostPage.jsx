import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm.jsx'
import { postsApiUrl } from '../api.js'

function NewPostPage() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const payload = {
      title: formData.get('title'),
      author: formData.get('author'),
      content: formData.get('content'),
    }

    try {
      const response = await fetch(postsApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`)
      }

      navigate(`/posts/${data._id}`)
    } catch (submitError) {
      setError(submitError.message)
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h1 className="page-title">New post</h1>
      {error && <p className="status-msg error">{error}</p>}
      <PostForm onSubmit={handleSubmit} submitting={submitting} />
    </div>
  )
}

export default NewPostPage
