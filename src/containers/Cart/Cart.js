import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartList);

  return (
    <Modal onClose={props.onClose}>
      {cartItems.length > 0 &&
        cartItems.map((cartItem) => (
          <>
            <div className={classes.total}>
              <span>{cartItem.title.substr(0, 8)}</span>
              <span>₹{cartItem.price}</span>
            </div>
          </>
        ))}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
