import React from 'react'
import { FaCalendar, FaUser } from 'react-icons/fa'
import './BlogPage.css'

const BlogPage = () => {
  const posts = [
    {
      title: 'Beneficiile educației muzicale pentru copii',
      date: '15 Martie 2024',
      author: 'Sound Music Art',
      excerpt: 'Descoperiți cum educația muzicală contribuie la dezvoltarea cognitivă și emoțională a copiilor...',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop'
    },
    {
      title: 'Cum să alegi instrumentul potrivit pentru tine',
      date: '10 Martie 2024',
      author: 'Sound Music Art',
      excerpt: 'Ghid complet pentru alegerea instrumentului muzical perfect în funcție de personalitate și preferințe...',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop'
    },
    {
      title: 'Tehnica Vocală Completă - De ce este eficientă',
      date: '5 Martie 2024',
      author: 'Sound Music Art',
      excerpt: 'Explorăm metodologia CVT și beneficiile sale pentru cântăreții de toate nivelurile...',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=500&fit=crop'
    }
  ]

  return (
    <div className="blog-page">
      <div className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Articole, noutăți și sfaturi despre muzică și educație</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><FaCalendar /> {post.date}</span>
                    <span><FaUser /> {post.author}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="blog-btn">Citește mai mult</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
