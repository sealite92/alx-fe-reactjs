// src/components/PostsComponent.jsx
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 5000, // Cache data for 5 seconds before marking as stale
      cacheTime: 1000 * 60 * 10, // Keep cached data for 10 minutes
      refetchOnWindowFocus: false, // Prevent refetching when window gains focus
      keepPreviousData: true, // Preserve previous data while fetching new data
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
