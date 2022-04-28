import { useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [stock, setStock] = useState(Math.floor(Math.random() * 30));
  const [init, setInit] = useState(Math.floor(Math.random() * stock));
  const onAdd = (val) => {alert(`Se han agregado ${val} items`)};

  return (
    <>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-5">
          <ItemList></ItemList>
          {/* <ItemCount stock={stock} initial={init} fn={onAdd}/> */}
        </div>
      </div>
    </>
  )
}
export default ItemListContainer