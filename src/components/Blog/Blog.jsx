import React from "react";
import PropTypes from "prop-types"

import "./Blog.css"
import { Link } from "react-router-dom";

export const Blog = (props) => {

    return (
        <div className="blogItem">
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <small><Link to={`blog/${props.post.id}`}>read more...</Link></small>
        </div>
    )
}

Blog.propTypes = {
    isAutorized: PropTypes.bool.isRequired,
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        post: PropTypes.string.isRequired
    })

}