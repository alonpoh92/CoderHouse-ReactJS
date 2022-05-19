import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  
  const {category} = useParams()

  const [items, setItems] = useState([]);

  const getItems = () => {
    const db = getFirestore();
    const items = [];
    if(category == undefined){
      const ref = collection(db, 'items');
      getDocs(ref).then((snapshot) => {
        snapshot.docs.map(doc => items.push({'id': doc.id, ...doc.data()}));  
        setItems(items);
      })
    }else{
      const ref = query(collection(db, "items"), where("category", "==", category));;
      getDocs(ref).then((snapshot) => {
        snapshot.docs.map(doc => items.push({'id': doc.id, ...doc.data()}));
        setItems(items);
      });
    }
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