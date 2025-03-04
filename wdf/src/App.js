import NavigationBar from './components/NavigationBar';
import './App.css';
import { Products } from './components/Products';
import Footer from './components/Footer';
import Socaimedia from './components/Socaimedia';
import { useState } from 'react';
import Banner from './components/Banner';
function App() {
   const [isCartOpen, setCartOpen] = useState(false);
   const [Cartitems, setCartitems] = useState([]);
  const toggleCart = () => {
    if (Cartitems.length > 0) {
      setCartOpen(!isCartOpen);
    }
  };
   const viewcart=<button className="cart-btn" onClick={toggleCart}>🛒 View Cart ({Cartitems.length})</button>

  return (
    <div className="App">
      
      <NavigationBar viewcart={viewcart}/>
      <Banner/>
      <Products toggleCart={toggleCart} isCartOpen={isCartOpen} setCartOpen={setCartOpen}
       Cartitems={Cartitems} setCartitems={setCartitems} />
      <Footer/>
      <Socaimedia/>
    </div>
  );
}

export default App;
