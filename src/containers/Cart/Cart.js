import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSelectedProduct,
  increaseItem,
  decreaseItem,
} from "../../redux/actions/productActions";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartList);
  console.log("cart items>>>", cartItems);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cartItems.reduce(addition, 0).toFixed(2);

  return (
    <Modal onClose={props.onClose}>
      {cartItems.length > 0 &&
        cartItems.map((cartItem) => (
          <>
            <div className={classes.total} key={cartItem.id}>
              <img
                className={classes.image}
                src={cartItem.image}
                alt={cartItem.title}
              />
              <span>{cartItem.title?.substr(0, 8)}</span>
              {cartItem.quantity > 0 && (
                <button onClick={() => dispatch(decreaseItem(cartItem))}>
                  -
                </button>
              )}

              <span>{cartItem.quantity}</span>
              <button onClick={() => dispatch(increaseItem(cartItem))}>
                +
              </button>
              <span>
                Amount:₹{cartItem.quantity * cartItem.price.toFixed(2)}
              </span>
              <button onClick={() => dispatch(deleteSelectedProduct(cartItem))}>
                Del
              </button>
            </div>
          </>
        ))}
      <div className={classes.actions}>
        <div>Total Bill: {total}</div>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {total > 1 && <button className={classes.button}>Checkout</button>}
      </div>
    </Modal>
  );
};

export default Cart;
