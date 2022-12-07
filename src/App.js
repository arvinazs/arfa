import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Chart from './pages/Chart';
import Home from './pages/Home';
import Table from './pages/Table';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="chart">Chart</NavLink>
          </li>
          <li>
            <NavLink to="table">Table</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chart" element={<Chart />} />
        <Route exact path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
