import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItemsContainer from "./CartItemsContainer";
import emptyCart from "../assets/empty-cart.png"
import { Link } from "react-router-dom";

const CartContainer = () => {

  const cart = useContext(CartContext);

  return (
    <>
      {cart.cartItems.length > 0 ? 
        <CartItemsContainer/> : 
        <div className="mt-6">
          <img className="mx-auto" src={emptyCart}/>
          <Link to={'/'}>
            <button className="btn btn-outline">Go to Shopping</button>
          </Link>
        </div>
      }
    </>
  )
}
export default CartContainer