import { useState } from "react"
import { CartContext } from "./CartContext"

export default function CartProvider ({children}){ 

    const [cartItems, setCartItems] = useState([])
    

    function addItem(item){
        const index = cartItems.findIndex(i => i.id === item.id);
        if (index !== -1){
            removeItem(item.id);
        }
        setCartItems( current => {
            return current.concat(item)
        });
    }

    function removeItem(id){
        if (isInCart(id)){
            setCartItems( current => {
                return current.filter(item => item.id != id);
            });
        }
    }

    function clear(){
        setCartItems([]);
    }
    
    function isInCart(id){
        return (cartItems.findIndex(item => item.id === id) !== -1);
    }

    function getQuantity(id){
        let qty = 0
        if(isInCart(id)){
            qty = cartItems.filter(item => item.id == id)[0].qty;
        }
        return qty;
    }

    const context = {
        cartItems, 
        addItem, 
        removeItem, 
        clear, 
        isInCart,
        getQuantity
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}