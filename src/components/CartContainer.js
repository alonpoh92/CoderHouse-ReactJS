import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import CartItemsContainer from "./CartItemsContainer";
import emptyCart from "../assets/empty-cart.png"
import { Link } from "react-router-dom";
import { LoaderContext } from "../context/LoaderContext";

const CartContainer = () => {

  const cart = useContext(CartContext);

  const loader = useContext(LoaderContext);

  useEffect(() => {
    loader.runLoader();
    loader.stopLoader();
  }, [])
  

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