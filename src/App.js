import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import EnginePage from './pages/EnginePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <nav className="flex justify-center items-center gap-8 p-4 mb-6 dark:bg-zinc-900">
        <NavLink
          className={({ isActive }) => {
            return `uppercase ${
              isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'
                : 'text-gray-500 hover:text-gray-900'
            }`;
          }}
          to="/"
        >
          Engine
        </NavLink>
        <h1 className="text-3xl font-bold text-center">ASSPG</h1>
        <NavLink
          className={({ isActive }) => {
            return `uppercase ${
              isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'
                : 'text-gray-500 hover:text-gray-900'
            }`;
          }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route index element={<EnginePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
