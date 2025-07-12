import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState({ username: 'Guest', role: 'guest' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');      // Clear stored user
    navigate('/');                        // Redirect to Login (your "/" route)
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Profile</h2>
        <button
          onClick={handleLogout}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm text-gray-600 capitalize">{user.role}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <p><span className="font-semibold">Age:</span> N/A</p>
        <p><span className="font-semibold">Gender:</span> N/A</p>
        <p><span className="font-semibold">Communities Joined:</span> React, JavaScript, CSS</p>
      </div>
    </div>
  );
}
