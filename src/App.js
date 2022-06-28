import "./App.css";
import Header from "./containers/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import Cart from "./containers/Cart/Cart";
import { useState } from "react";
import NoPage from "./containers/NoPage";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <Router>
        <div style={{ padding: "40px" }}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
        </div>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart onClose={hideCartHandler} />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
