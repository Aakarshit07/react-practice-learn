import { useEffect } from "react";
import { usePostsStore } from "../store/postsStore";

const Posts = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "24px",
        textTransform: "capitalize",
      }}
    >
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
