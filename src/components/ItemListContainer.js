import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const {category} = useParams()

  const [items, setItems] = useState([]);

  const getItems = () => {
    let url = ``;
    if(category == undefined){
      url = "https://dummyjson.com/products/?limit=100";
    }else{
      url = `https://dummyjson.com/products/category/${category}`
    }
    fetch(`${url}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setItems(data.products);
        })
  };

  useEffect(() => {
    getItems();
  }, [category])

  return (
    <>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-5">
          <ItemList items={items}/>
        </div>
      </div>
    </>
  )
}
export default ItemListContainer