import { useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({item, buyed, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [showCounter, setShowCounter] = useState(true);

    const stock = item.stock - buyed;

    const addItem = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };

    const subItem = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    return (
        <>
            {showCounter ? 
                <div>
                    <p className="text-red-400 text-sm">{stock == 0 ? "Unavailable" : `Just ${stock} available!!!`}</p>
                    <div className="card-actions justify-center">
                        <div className="my-2 flex content-center">
                            <button onClick={subItem} className="btn btn-circle btn-outline btn-sm" disabled={count == 0 ? "disabled" : ""}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12L18 12" /></svg>
                            </button>
                            <p style={{marginTop:3}} className="mx-3">{count}</p>
                            <button onClick={addItem} className="btn btn-circle btn-outline btn-sm" disabled={count == stock ? "disabled" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12L18 12M12 6L12 18" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => {onAdd({id: item.itemId, name: item.title, price: item.price, img: item.thumbnail, category: item.category, qty: count}); setShowCounter(false)}} className="btn btn-outline gap-2" disabled={count == 0 ? "disabled" : ""}>Add to Cart</button>
                    </div>
                </div>
            :
                <div>
                    <p className="mb-3">{count} items added to Cart!!!</p>
                    <Link to={'/cart'}><button className="btn btn-outline">Go to Cart</button></Link>
                </div>
            }
        </>
        
    )
}
export default ItemCount