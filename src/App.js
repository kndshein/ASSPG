import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import EnginePage from './components/EnginePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline">Hello</div>
      <Link to="/">Engine</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route index element={<EnginePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
