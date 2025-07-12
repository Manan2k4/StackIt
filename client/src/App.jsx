import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can later add more routes here like /ask, /login, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
