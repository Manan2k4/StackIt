import { useState } from 'react';
import axios from 'axios';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', { title, body });
      alert('Post created successfully!');
      setTitle('');
      setBody('');
    } catch (err) {
      alert('Error creating post', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Post Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Post Body</label>
          <textarea
            className="w-full mt-1 p-2 border rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your question or post here"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}