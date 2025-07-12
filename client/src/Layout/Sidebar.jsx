import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 h-full p-4 border-r">
      <div className="mb-6 text-sm text-gray-700 font-semibold">Logged in as: Guest</div>
      <nav className="flex flex-col gap-4 text-gray-800">
        <Link to="/" className="hover:text-blue-600">🏠 Home</Link>
        <Link to="/communities" className="hover:text-blue-600">👥 Communities</Link>
        <Link to="/create" className="hover:text-blue-600">✏️ Create Post</Link>
      </nav>
    </aside>
  );
}
