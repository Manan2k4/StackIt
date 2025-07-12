import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/login', {
        username,
        password,
        role,
      });
      navigate('/home');
    } catch (err) {
      alert('Login failed. Check credentials & role.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md space-y-5 border border-blue-200"
      >
        <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-700">
          <LogIn className="w-6 h-6" /> Login
        </h2>

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition text-sm"
        >
          Don’t have an account? Sign Up
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

export default Login;
