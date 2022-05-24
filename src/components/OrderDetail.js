import OrderItemDetail from "./OrderItemDetail"

const OrderDetail = ({order}) => {
    return (
        <div className="w-2/3 rounded-md border-lime-600 border-2 mx-auto mt-10 p-5">
            <p className="text-right text-sm"><span className="font-bold">Order No.</span> {order.id}</p>
            <p className="font-bold text-left text-xl mt-4">{order.data.buyer.name.toUpperCase()}</p>
            <p className="font-bold text-left mt-5 text-lime-600 pb-6">Thanks for your order</p>
            <p className="text-left">Payment summary</p>
            <p className="border-dotted border-lime-600 border-2 mb-4"></p>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className="text-center" style={{'zIndex': 0}}>Item</th>
                            <th className="text-center">Quatity</th>
                            <th className="text-center">Price Each</th>
                            <th className="text-center">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.data.items.map((item, id) => <OrderItemDetail key={id} item={item}/>)}                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="text-center text-base">Total: ${order.data.total}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default OrderDetail