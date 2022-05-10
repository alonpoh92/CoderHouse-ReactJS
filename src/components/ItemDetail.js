import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemRatingContainer from "./ItemRatingContainer";

const ItemDetail = ({item}) => {
    const [bigImg, setBigImg] = useState(item.images[0]); 
    const [showCounter, setShowCounter] = useState(true)
    const onAdd = (val) => {
        if(val > 0){
            alert(`Se han agregado ${val} items`);
            setShowCounter(false);
        }
    };

    return (
        <>  
            <div className="grid grid-cols-12 gap-3 p-4">
                {/* preview images */}
                <div>
                    {item.images.map((img, i) => 
                        <div key={i} onClick={() => setBigImg(img)} className="mb-2 cursor-pointer border-2 border-gray-600 hover:border-red-600 rounded aspect-square">
                            <img className="w-full h-full object-cover" src={img}></img>
                        </div>
                    )}                    
                </div>
                {/* selected image */}
                <div className="col-span-5">
                    <div className="mb-2 border-2 border-gray-600 rounded aspect-square">
                        <img className="w-full h-full object-cover" src={bigImg}></img>
                    </div>
                </div>
                {/* item description */}
                <div className="col-span-6">
                    <div className="mb-2">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="mb-2">
                        <ItemRatingContainer rating={item.rating}/>
                    </div>
                    <div>
                        <p>{item.description}</p>
                    </div>
                    <div className="mt-5 text-2xl font-bold">
                        <p>${item.price}</p>
                    </div>
                    <div className="mt-2">
                        <ItemCount stock={item.stock} initial={0} fn={onAdd} showCounter={showCounter}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail