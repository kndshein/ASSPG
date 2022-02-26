import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline">Hello</div>
      <Link to="/about">About</Link>
    </>
  );
}

export default App;
