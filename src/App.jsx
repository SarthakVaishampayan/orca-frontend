import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/custom/login";
import Sidebar from "./components/custom/sidebar";
import Analytics from "./components/custom/analytics";
import Navbar from "./components/custom/ṇavbar";
import NewOrder from "./components/custom/newOrder";
import PreviousOrder from "./components/custom/previousOrder";
import SalesHistory from "./components/custom/salesHistory";
import Inventory from "./components/custom/inventory";

import Invoice from "./components/custom/invoice";

import Dashboard from "./pages/dashboard";
import { useAuth } from "./contexts/authContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Products from "./pages/products";
import Sales from "./pages/sales";
import CustomerPage from "./pages/CustomerPage";
import AIRecomend from "./pages/askAIPage";
import NewOrderPage from "./pages/NewOrderPage";
import PreviousOrderPage from "./pages/PreviousOrderPage";

function App() {
  const { authStatus, setauthStatus } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <Routes>
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/customers" element={<CustomerPage />} />

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/askAI" element={<AIRecomend />} />
      <Route path="/new-order" element={<NewOrderPage />} />
      <Route path="/previous-orders" element={<PreviousOrderPage />} />
    </Routes>
  );
}

export default App;
