import { useEffect, useState } from "react";

import { getBlogs } from "../../data/blog-posts.js"
import { Blog } from "../Blog/Blog.jsx"
import "./BlogList.css";



const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs()
            .then(blogs => setBlogs(blogs))
    }, [])

    return (
        <div className="blog-container">
                {
                blogs.map((blog,index) => <Blog post={blog} isAutorized={true} key={index}/>)
                }

        </div>
    )
}

export default BlogList;