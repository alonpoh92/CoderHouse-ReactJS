import { Link } from "react-router-dom";

const CartItemDetail = ({item, deleteItem}) => {
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <Link to={`/item/${item.id}`}>
                                    <img src={item.img} alt={item.name}/>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link to={`/item/${item.id}`}>
                                <div className="font-bold capitalize">{item.name.toLowerCase()}</div>
                            </Link>
                            <Link to={`/category/${item.category}`}>
                                <span className="badge badge-ghost badge-sm capitalize">{item.category}</span>
                            </Link>
                        </div>
                        <div>
                            <button onClick={() => {deleteItem(item.id)}} className="btn btn-outline btn-error btn-xs">Remove</button>
                        </div>
                    </div>
                </td>
                <td className="text-center">{item.qty}</td>
                <td className="text-center">${item.price}</td>
                <td className="text-center">${item.price*item.qty}</td>
                
            </tr>
        </>
    )
}
export default CartItemDetail