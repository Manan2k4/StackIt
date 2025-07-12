import { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    'You have a new answer on your question.',
    'Your post was upvoted!',
    'Reminder: Check out the latest questions in React community.'
  ];

  const navigate = useNavigate();

  return (
    <nav className="w-full h-14 bg-white border-b shadow-sm flex items-center justify-between px-4 relative">
      <div className="text-xl font-bold">StackIt</div>
      <div className="flex-1 flex justify-center">
        <input type="text" placeholder="Search..." className="w-1/2 p-2 border rounded" />
      </div>
      <div className="flex gap-4 text-xl relative">
        <FaBell className="cursor-pointer" onClick={() => setShowNotifications(!showNotifications)} />
        <FaUserCircle className="cursor-pointer" onClick={() => navigate('/profile')} />

        {showNotifications && (
          <div className="absolute right-0 mt-14 w-72 bg-white border rounded shadow-lg z-10 p-4">
            <h4 className="font-semibold mb-2">Notifications</h4>
            <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
              {notifications.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}