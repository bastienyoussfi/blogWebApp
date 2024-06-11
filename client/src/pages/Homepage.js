import { useEffect, useState } from "react";
import Post from "../Components/Post";

export default function Homepage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/posts").then((response) => {
            response.json().then((data) => {
                setPosts(data);
            });
        });
    }, []);

    return (
        <div className="font-mono">
            {posts.length > 0 && posts.map(post => (
                <Post key={post._id} {...post} />
            ))}
        </div>
    );
}