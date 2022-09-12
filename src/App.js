import logo from "./logo.svg";
import "antd/dist/antd.min.css";
import "./styles/App.scss";
import LoginForm from "./components/User/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/User/RegisterForm";
import ForgetPassword from "./components/User/ForgetPassword";
import Product from "./components/products";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
