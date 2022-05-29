import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Badge,
  Button,
} from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";

// import Cart from "../Cart/Cart.jsx";
// import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" underline="none">
            FakeCart
          </Link>
        </Typography>

        <Link href="/cart" underline="none">
          <Button>
            <Badge badgeContent={products.length} color="primary">
              <ShoppingCart />
            </Badge>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
