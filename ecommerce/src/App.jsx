import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cancel from "./pages/Cancel";
import Cart from "./pages/Cart";
// import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import ScrollTop from "./components/ScrollTop";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />} />
        <Route path="/orders/find/:id" element={<Orders />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/orders/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
