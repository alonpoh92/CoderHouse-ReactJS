import { Link } from "react-router-dom"

const OrderItemDetail = ({item}) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3 text-sm">
            <div>
                <Link to={`/item/${item.id}`}>
                    <div className="font-bold capitalize">{item.name.toLowerCase()}</div>
                </Link>
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
export default OrderItemDetail