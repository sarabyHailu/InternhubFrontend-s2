import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/payment" element={<PaymentPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
