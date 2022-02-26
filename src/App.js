import { Link } from 'react-router-dom';
import PassGenerator from './components/PassGenerator';

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline">Hello</div>
      <Link to="/about">About</Link>
      <PassGenerator />
    </>
  );
}

export default App;
