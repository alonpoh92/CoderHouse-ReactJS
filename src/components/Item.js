import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    const [stockMsg, setStockMsg] = useState("");
    const [stockColor, setStockColor] = useState("");

    useEffect(() => {
        if(item.stock > 0){
            setStockMsg(`${item.stock} available`);
            if(item.stock >= 30){
                setStockColor("text-gray-500 flex justify-center items-end mt-2");
            }else{
                setStockColor("text-orange-300 flex justify-center items-end mt-2");
            }
        }else{
            setStockMsg(`Unavailable`);
            setStockColor("text-red-300 flex justify-center items-end mt-2");
        }    
    }, [])

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure style={{height: 150}}>
                    <img className="object-cover h-full w-full" src={item.thumbnail} alt={item.title} />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title justify-center mb-1 capitalize">{item.title.toLowerCase()}</h2>
                        <p className="text-left">{item.description}</p>
                    </div>
                    <p className={stockColor}>{stockMsg}</p>
                    <div className="card-actions justify-end items-center  mb-2">
                        <p className="text-gray-700 text-2xl font-semibold">${item.price}</p>
                        <Link to={`/item/${item.id}`}><button className="btn btn-outline">Show More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item