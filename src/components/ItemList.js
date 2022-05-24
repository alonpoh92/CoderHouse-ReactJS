import Item from "./Item"

const ItemList = ({items, orders}) => {
    return (
        <>
            {items.map(item => <Item key={item.id} item={item} orders={orders.filter(order => order.id == item.itemId)}/>)}
        </>
    )
}
export default ItemList