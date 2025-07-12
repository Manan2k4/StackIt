import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Communities from './pages/Communities';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes (no Layout) */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected/Layout-wrapped routes */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/communities" element={<Communities />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
