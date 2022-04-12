import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductListPage from "./pages/ProductListPage";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/productlist" element={<ProductListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
