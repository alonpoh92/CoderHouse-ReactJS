import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
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
      const db = getFirestore();
      const ref = query(collection(db, "items"), where("itemId", "==", id));
      const items = [];
      getDocs(ref).then((snapshot) => {
        if(snapshot.size == 1){
          snapshot.docs.map(doc => {
            const ref1 = query(collection(db, "images"), where("itemId", "==", id));
            const images = [];
            getDocs(ref1).then((snapshot1) => {
              snapshot1.docs.map(doc => {
                images.push(doc.data().image);
              });
              items.push({'id': doc.id, ...doc.data(), 'images': images});
              setItem(items);
            })
          });
        }else{
          setItem([]);
        }
      });
        /* const url = `https://dummyjson.com/products/${id}`;
        fetch(`${url}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setItem([data]);
            }) */
    };
  return (
    <>
        {item.map(i => <ItemDetail key={i.id} item={i}></ItemDetail>)}        
    </>
  )
}
export default ItemDetailContainer