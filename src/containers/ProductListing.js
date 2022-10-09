import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fecthCategory = useCallback(
    async (category) => {
      const response = await axios
        .get("https://fakestoreapi.com/products/${category}")
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(setProducts(response.data));
    },
    [dispatch]
  );

  const fecthProducts = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fecthProducts();
  }, [fecthProducts]);

  console.log("productList >>>", products);
  return (
    <>
      <div>
        <button class="ui black button" onClick={fecthCategory()}>
          Jewellery
        </button>
        <button class="ui black button" onClick={fecthCategory()}>
          Jewellery
        </button>
        <button class="ui black button" onClick={fecthCategory()}>
          Jewellery
        </button>
        <button class="ui black button" onClick={fecthCategory()}>
          Jewellery
        </button>
      </div>

      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
