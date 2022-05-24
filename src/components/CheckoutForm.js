import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({cart}) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const phoneHandler = (event) => {
        setPhone(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const createOrder = () => {
        const db = getFirestore();
        const order = {"buyer": {"name": name, "phone": phone, "email": email}, "items": cart.cartItems, "date": Date.now(), "total": (cart.cartItems.map(i => i.qty*i.price)).reduce((partialSum, a) => partialSum + a, 0)};
        addDoc(collection(db, 'orders'), order)
            .then((res) => {
                navigate(`/order/${res.id}`);
                cart.clear();
            });
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-full mt-3">
                <h2 className="text-2xl font-bold mb-2">Shipping Details</h2>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Name:</span>
                    </label>
                    <input type="text" placeholder="Type here" value={name} onChange={nameHandler} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Phone:</span>
                    </label>
                    <input type="text" placeholder="Type here" value={phone} onChange={phoneHandler} className="input input-bordered w-full" />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Email:</span>
                    </label>
                    <input type="text" placeholder="Type here" value={email} onChange={emailHandler} className="input input-bordered w-full" />
                </div>
                <button className="btn btn-outline btn-success mt-7" onClick={createOrder}>Place Order</button>
            </div>
        </div>
    )
}
export default CheckoutForm