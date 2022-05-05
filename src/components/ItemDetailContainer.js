import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();

    const [item, setItem] = useState([])

    useEffect(() => {
      getItem()
    }, [id])    

    const getItem = () => {
        const url = `https://dummyjson.com/products/${id}`;
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