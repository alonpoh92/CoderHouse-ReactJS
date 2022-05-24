import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"
import { LoaderContext } from "../context/LoaderContext"
import CheckoutForm from "./CheckoutForm";

const CheckoutContainer = () => {

    const cart = useContext(CartContext);
    const loader = useContext(LoaderContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        loader.stopLoader();
        if(cart.cartItems.length < 1){
            navigate("/cart");
        }
    }, [cart.cartItems])

    return (
        <CheckoutForm cart={cart}/>
    )
}
export default CheckoutContainer