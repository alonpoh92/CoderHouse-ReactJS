import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { LoaderContext } from "../context/LoaderContext";
import OrderDetail from "./OrderDetail";

const OrderContainer = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const loader = useContext(LoaderContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        loader.stopLoader();
        getOrder(id);
    }, [id])    

    const getOrder = (orderId) => {
        const db = getFirestore();
        getDoc(doc(db, "orders",orderId))
            .then((res) => {
                if(res.exists()){
                    const data = res.data();
                    setOrder([{"data": data, "id": id}]);
                }else{
                    navigate("/");
                }
            });
    }

    return (
        <>
            {order.map(or => <OrderDetail key={or.id} order={or}/>)}        
        </>
    )
}
export default OrderContainer