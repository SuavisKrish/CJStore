import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  var cart = useSelector((state) => state.cart.cartList);
  console.log("Header cart value", cart);

  return (
    <>
      <button
        className={classes.button1}
        onClick={props.onClick}
        disabled={cart.length === 0}
      >
        <span>Your</span>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>has</span>
        <span className={classes.badge}>
          {cart.length || (cart.length === 0 && <div>no</div>)}
        </span>
        <span>{cart.length === 1 ? "item" : "items"}</span>
      </button>
      <button className={classes.button2}>sign In</button>
    </>
  );
};

export default HeaderCartButton;
