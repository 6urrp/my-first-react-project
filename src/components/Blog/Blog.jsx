import React from "react";

import "./Blog.css"

export const Blog = (props) => {

    return (
        <div className="blogItem">
            <h3>{props.post.title}</h3>
            <p>{props.post.post}</p>
        </div>
    )
}