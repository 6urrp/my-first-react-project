import React from "react";

import { blogData } from "../../data/blog-posts.js"
import { Blog } from "../Blog/Blog.jsx"
import "./BlogList.css";


const BlogList = () => {
    return (
        <div className="blog-container">
            {
            blogData.map((blog, index) => <Blog post={blog} isAutorized={true} key={index} /> )
            }
        </div>
    )
}

export { BlogList };