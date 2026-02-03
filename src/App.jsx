import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <Router>
      {/* Header */}
      <header className="p-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">Sylviah Rutto</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="p-6 bg-white text-center text-gray-500 text-sm shadow-inner">
        © {new Date().getFullYear()} Sylviah Rutto
      </footer>
    </Router>
  );
}
