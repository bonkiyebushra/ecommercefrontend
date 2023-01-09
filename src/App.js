import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import DashboardMenu from './DashboardMenu';
import Inventory from './Inventory';
import Orders from './Orders';
import Products from './Products';
import Settings from './Settings';

function App() {
  return (
    <>
      <DashboardMenu />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;