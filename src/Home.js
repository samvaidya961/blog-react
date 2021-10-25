import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, ispending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {ispending && <div>Loading Blogs ... !</div>}
            {blogs && <BlogList blogs={blogs} heading="All Blogs" />}
        </div>
    );
}

export default Home;