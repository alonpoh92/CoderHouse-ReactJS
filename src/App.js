import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import CartProvider from './context/CartProvider';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category" element={<ItemListContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/item" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="*" element={<ItemListContainer/>}/>
          </Routes>        
        </div>    
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
