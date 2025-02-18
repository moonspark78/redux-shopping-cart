import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from "./pages/home/Home.jsx";
import CartPage from "./pages/carts/CartPage.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
