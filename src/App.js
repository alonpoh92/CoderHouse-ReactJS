import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import CartProvider from './context/CartProvider';
import Loader from './components/Loader';
import { LoaderContext } from './context/LoaderContext';
import { useContext } from 'react';
import CheckoutContainer from './components/CheckoutContainer';
import OrderContainer from './components/OrderContainer';

function App() {

  const loader = useContext(LoaderContext)

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div className='w-screen h-screen overflow-y-auto'>
            <NavBar/>
            {loader.loader ? <Loader/> : <></>}
            <div style={{'paddingTop':'64px'}}>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category" element={<ItemListContainer/>}/>
                <Route path="/category/:category" element={<ItemListContainer/>}/>
                <Route path="/item" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartContainer/>}/>
                <Route path="/checkout" element={<CheckoutContainer/>}/>
                <Route path="/order/:id" element={<OrderContainer/>}/>
                <Route path="*" element={<ItemListContainer/>}/>
              </Routes>        
            </div>
          </div>
        </div>    
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
