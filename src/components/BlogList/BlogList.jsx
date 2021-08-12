import React from "react";

import { blogData } from "../../data/blog-posts.js"

import "./BlogList.css";


const BlogList = () => {
    return (
        <div className="blog-container">
            {blogData.map((blog, index) => (
                <div className="blogItem">
                    <h3>{blog.title}</h3>
                    <p>{blog.post}</p>
                </div>
            ))}
        </div>
    )
}

export { BlogList };