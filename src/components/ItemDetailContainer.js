import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
      getItem()
    }, [])    

    const getItem = () => {
        const url = `https://dummyjson.com/products/${Math.floor(Math.random() * 98)+1}`;
        fetch(`${url}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setItem([data]);
            })
    };
  return (
    <>
        {item.map(i => <ItemDetail key={i.id} item={i}></ItemDetail>)}        
    </>
  )
}
export default ItemDetailContainer