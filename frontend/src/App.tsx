import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    // layout
    <div className="text-primary">
      <Navbar />
      <main className="container mx-auto px-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
