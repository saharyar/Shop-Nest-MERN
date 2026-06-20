//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import OrderSuccess from './pages/OrderSuccess';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import ReturnPolicy from './pages/ReturnPolicy';
import AdminDashboard from './Admin/AdminDashboard';
import AddProduct from './Admin/AddProduct';
import AdminProduct from './Admin/AdminProduct';
import EditProduct from './Admin/EditProduct';
import AdminOrders from './Admin/AdminOrders';
import AdminUsers from './Admin/AdminUsers';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="/Admin/add-product" element={<AddProduct />} />
          <Route path="/Admin/product" element={<AdminProduct />} />
          <Route path="/Admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/Admin/orders" element={<AdminOrders />} />
          <Route path="/Admin/users" element={<AdminUsers />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;