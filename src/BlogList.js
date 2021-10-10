const BlogList = ({ blogs, heading, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{heading}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;