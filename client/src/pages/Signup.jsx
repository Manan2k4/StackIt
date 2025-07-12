import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserPlus } from 'lucide-react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', {
        username,
        password,
        role,
      });
      alert('Signup successful! You can now log in.');
      navigate('/');
    } catch (err) {
      alert(
        'Signup failed: ' +
          (err.response?.data?.message || 'Something went wrong')
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md space-y-5 border border-green-200"
      >
        <h2 className="text-3xl font-bold flex items-center gap-2 text-green-700">
          <UserPlus className="w-6 h-6" /> Sign Up
        </h2>

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition text-sm"
        >
          Already have an account? Log In
        </button>

        <button
          type="button"
          onClick={() => navigate('/home')}
          className="w-full border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition text-gray-500 text-sm"
        >
          Continue as Guest
        </button>
      </form>
    </div>
  );
};

export default Signup;
