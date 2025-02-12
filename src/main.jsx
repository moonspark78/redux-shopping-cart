import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from "./pages/home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
