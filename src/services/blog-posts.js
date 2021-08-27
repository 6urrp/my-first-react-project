const endpoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
    
    return fetch(endpoint)
    .then(resp => resp.json())
    .then(blogs => blogs)
}

export const getSingleBlog = (id) => {
    return fetch(`${endpoint}/${id}`)
    .then(response => response.json())
    .then(blog => blog)
}