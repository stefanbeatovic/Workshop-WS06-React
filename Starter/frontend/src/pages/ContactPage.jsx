function ContactPage() {
  return (
    <section className="panel page-panel">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Need help while building the API?</h1>
      <p className="page-copy">
        The blog uses the <code>/api/posts</code> REST API to load, create, edit, and delete posts.
      </p>
      <p className="page-copy">
        During development, run the React app through Vite and the backend separately. In production mode, Express can serve the React build and the API from the same host.
      </p>
    </section>
  )
}

export default ContactPage