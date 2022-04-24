import { useEffect, useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [stockMsg, setStockMsg] = useState("");
    const [ableBtnAdd, setAbleBtnAdd] = useState("");
    const [ableBtnSub, setAbleBtnSub] = useState("");

    useEffect(() => {
        if(props.stock == 0){
            setStockMsg("Sin Stock");
        }else{
            setStockMsg(`Solo ${props.stock} en stock!!!`);
        }
    }, [])

    useEffect(() => {
      validateBtnStatus();
    }, [count])
    

    const validateBtnStatus = () => {
        if(count == props.stock){
            setAbleBtnAdd("disabled");
        }else{
            setAbleBtnAdd("");
        }
        if(count == 0){
            setAbleBtnSub("disabled")
        }else{
            setAbleBtnSub("")
        }
    };

    const addItem = () => {
        if(count < props.stock){
            setCount(count + 1);
        }
    };

    const subItem = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure>
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p className="text-red-400 text-sm">{stockMsg}</p>
                    <div className="my-2 flex content-center">
                        <button onClick={subItem} className="btn btn-circle btn-outline btn-sm" disabled={ableBtnSub}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12L18 12" /></svg>
                        </button>
                        <p style={{marginTop:3}} className="mx-3">{count}</p>
                        <button onClick={addItem} className="btn btn-circle btn-outline btn-sm" disabled={ableBtnAdd}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12L18 12M12 6L12 18" /></svg>
                        </button>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => {props.fn(count)}} className="btn btn-outline gap-2" disabled={ableBtnSub}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemCount