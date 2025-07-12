import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [user, setUser] = useState({ username: 'Guest', role: 'guest' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <aside className="w-64 bg-gray-100 h-full p-4 border-r">
      <div className="mb-6 text-sm text-gray-700 font-semibold">
        Logged in as: {user.role.charAt(0).toUpperCase() + user.role.slice(1)} ({user.username})
      </div>

      <nav className="flex flex-col gap-4 text-gray-800">
        <Link to="/home" className="hover:text-blue-600">🏠 Home</Link>
        <Link to="/communities" className="hover:text-blue-600">👥 Communities</Link>
        <Link to="/create" className="hover:text-blue-600">✏ Create Post</Link>
      </nav>

      {user.role === 'admin' && (
        <div className="mt-10 border-t border-gray-300 pt-4">
          <div className="mb-2 text-sm font-semibold text-gray-700">🛠 Admin Tools</div>
          <nav className="flex flex-col gap-3 text-gray-800">
            <Link to="/admin/reports" className="hover:text-red-600">📄 Review Reports</Link>
            <Link to="/admin/restrict" className="hover:text-red-600">🚫 Restrict Communities</Link>
            <Link to="/admin/ban" className="hover:text-red-600">🔨 Ban Users</Link>
          </nav>
        </div>
      )}
    </aside>
  );
}

