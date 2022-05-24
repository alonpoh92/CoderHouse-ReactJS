import { collection, getDoc, getDocs, getFirestore, query, where, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderContext } from "../context/LoaderContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const {id} = useParams();

  const navigate = useNavigate();

  const [item, setItem] = useState([]);
  const [buyed, setBuyed] = useState(0);

  const loader = useContext(LoaderContext)

  useEffect(() => {
    loader.runLoader();
    getItem()
  }, [id])    

  const getItem = () => {
    const db = getFirestore();
    const ref = query(collection(db, "items"), where("itemId", "==", id));
    const items = [];
    getDocs(ref)
      .then((snapshot) => {
        if(snapshot.size == 1){
          snapshot.docs.map(document => {
            const ref1 = query(collection(db, "images"), where("itemId", "==", id));
            const images = [];
            getDocs(ref1)
              .then((snapshot1) => {
                snapshot1.docs.map(document => {
                  images.push(document.data().image);
                });
                items.push({'id': document.id, ...document.data(), 'images': images});
                setItem(items);
                
                const ref2 = collection(db, "orders");
                const orders = [];
                getDocs(ref2)
                  .then((snapshot2) => {
                    snapshot2.docs.map((document) => {
                      const items = document.data().items;
                      for(let x=0; x<items.length; x+=1){
                        if(items[x].id == id){
                          orders.push(items[x]);
                        }
                      }
                    });
                    setBuyed((orders.map(i => i.qty)).reduce((partialSum, a) => partialSum + a, 0));
                    loader.stopLoader();
                  });
              })
          });
        }else{
          setItem([]);
          navigate('/')
          loader.stopLoader();
        }
    });
  };
  
  return (
    <>
        {item.map(i => <ItemDetail key={i.id} item={i} buyed={buyed}></ItemDetail>)}        
    </>
  )
}
export default ItemDetailContainer