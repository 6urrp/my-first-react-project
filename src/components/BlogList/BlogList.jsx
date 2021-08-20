import React, { Component } from "react";

import { getBlogs } from "../../data/blog-posts.js"
import { Blog } from "../Blog/Blog.jsx"
import "./BlogList.css";


class BlogList extends Component {
    constructor(props) {
        super(props) 
        this.state = {
        blogs: []
        }
    }

    componentDidMount () {
        getBlogs()
            .then(blogs => {
                this.setState({blogs})
            })
    }

    render () {
        return (
            <div className="blog-container">
                {
                this.state.blogs.map((blog,index) => <Blog post={blog} isAutorized={true} key={index}/>)
                }

            </div>
        )
    }
    
}


// const BlogList = () => {
//     return (
//         <div className="blog-container">
//             {
//             blogData.map((blog, index) => <Blog post={blog} isAutorized={true} key={index} /> )
//             }
//         </div>
//     )
// }

export { BlogList };