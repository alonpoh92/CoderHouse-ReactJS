import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartItemDetail from "./CartItemDetail"

const CartItemsContainer = () => {

    const cart = useContext(CartContext)

    return (
        <>
            <div className="mx-auto mt-8 w-10/12">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center" style={{'zIndex': 0}}>Item</th>
                            <th className="text-center">Quatity</th>
                            <th className="text-center">Price Each</th>
                            <th className="text-center">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cartItems.map((item, id) => <CartItemDetail key={id} item={item} deleteItem={cart.removeItem}/>)}                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="text-center text-base">Total: ${(cart.cartItems.map(i => i.qty*i.price)).reduce((partialSum, a) => partialSum + a, 0)}</th>
                        </tr>
                    </tfoot>
                </table>
                <div className="mt-5 flex items-center justify-center">
                    <Link to={'/'}><button className="btn btn-outline mx-3">Keep Shopping</button></Link>
                    <button onClick={() => {cart.clear()}} className="btn btn-outline btn-error mx-3">Empty Cart</button>
                    <Link to={'/checkout'}><button className="btn btn-outline btn-success mx-3">Go to Pay</button></Link>
                </div>
            </div>
        </>
    )
}
export default CartItemsContainer