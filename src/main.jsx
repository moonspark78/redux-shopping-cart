import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
