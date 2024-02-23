import React, {useState, useEffect} from 'react'
import BlogCard from '../components/BlogCard'
import './blog.css'
import datas from '../data/blogData.json'

function Blog() {
    const [blogs, setBlogs] = useState(datas)

    

  return (
    <section id='blog' className='blogs'>
        <div className='container-fluid'>
            <div className='row'>
                <h4 className='section-title'>Our Blog</h4>
            </div>
            <div className='row mt-5'>
                {
                    blogs &&
                    blogs.length > 0 &&
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}/>)
                }
            </div>
        </div>
    </section>
    
  )
}

export default Blog
