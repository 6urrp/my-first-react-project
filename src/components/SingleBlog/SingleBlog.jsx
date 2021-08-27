import { useEffect, useState } from "react";

import "./SingleBlog.css";

import { getSingleBlog } from "../../services/blog-posts";


const SingleBlog = (props) => {
    const [singleBlog, setSingleBlog] = useState({});

    useEffect(() => {
        getSingleBlog(props.match.params.id).then(blog => setSingleBlog(blog));
    }, [])


    return (
        <div className="single-blog-container">
            <h3>{singleBlog.title}</h3>
            <p>{singleBlog.body}</p>
        </div>
    )
}

export default SingleBlog;