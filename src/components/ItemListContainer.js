import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
  const [stock, setStock] = useState(Math.floor(Math.random() * 30));
  const [init, setInit] = useState(Math.floor(Math.random() * stock));
  const onAdd = (val) => {alert(`Se han agregado ${val} items`)};

  return (
    <>
      <div>{props.text}</div>
      <ItemCount stock={stock} initial={init} fn={onAdd}/>
    </>
  )
}
export default ItemListContainer