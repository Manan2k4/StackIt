import { useState } from 'react';

export default function CreatePost() {
  const [postName, setPostName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', { postName, image });
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
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Upload Image (optional)</label>
          <input
            type="file"
            className="mt-1"
            onChange={(e) => setImage(e.target.files[0])}
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