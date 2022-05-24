import { useContext, useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { LoaderContext } from "../context/LoaderContext";

const ItemListContainer = () => {
  
  const {category} = useParams()

  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const loader = useContext(LoaderContext);

  const getItems = () => {
    const db = getFirestore();
    const items = [];
    if(category == undefined){
      const ref = collection(db, 'items');
      getDocs(ref).then((snapshot) => {
        snapshot.docs.map(doc => items.push({'id': doc.id, ...doc.data()}));  
        setItems(items);
        getOrders();
      })
    }else{
      const ref = query(collection(db, "items"), where("category", "==", category));;
      getDocs(ref).then((snapshot) => {
        snapshot.docs.map(doc => items.push({'id': doc.id, ...doc.data()}));
        setItems(items);
        getOrders();
      });
    }
  };

  const getOrders = () => {
    const db = getFirestore();
    const ref = collection(db, "orders");
    getDocs(ref)
      .then((snapshot) => {
        let newOrders = [];
        snapshot.docs.map((document) => {
          const items = document.data().items;
          for(let x=0; x<items.length; x+=1){
            const order = {"id": items[x].id, "qty": items[x].qty};
            newOrders.push(order);
          }
        });
        setOrders(newOrders);
        loader.stopLoader();
      });
  }

  useEffect(() => {
    loader.runLoader();
    getItems();
  }, [category])

  return (
    <>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-5">
          <ItemList items={items} orders={orders}/>
        </div>
      </div>
    </>
  )
}
export default ItemListContainer