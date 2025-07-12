import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-700">{post.title}</h3>
            <p className="text-gray-700 mt-2 whitespace-pre-wrap">{post.body}</p>
            <p className="text-xs text-gray-500 mt-3">
              Posted on {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="text-gray-500">No posts yet. Be the first to create one!</p>
        )}
      </div>
    </div>
  );
}