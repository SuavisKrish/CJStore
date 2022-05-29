import "./App.css";
import Header from "./containers/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
//screens
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import Cart from "./containers/Cart/Cart";
import { addToCart } from "./redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddTocart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="App">
      <Router>
        <div style={{ padding: "40px" }}>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*">404 Not Found</Route>
        </Routes>
      </Router>

      {/* <Router>
        <div style={{ padding: "40px" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:productId" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="*">404 Not Found</Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
