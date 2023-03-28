import { Outlet } from 'react-router-dom';

function App() {
  return (
    // layout
    <div>
      {/* header */}
      {/* main */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
}

export default App;
