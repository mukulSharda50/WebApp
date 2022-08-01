import {Navbar, ProductList, CartList, Checkout} from './components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {commerce} from './lib/commerce';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    // console.log(data)
    setCart(data);
  }
  const HandleAddToCart = async (prodId, qty) => {
    const cartItem = await commerce.cart.add(prodId, qty);
    setCart(cartItem); // cartItem
    // console.log(cartItem);
    // console.log(cart.total_items);
  }
  const HandleEmptyCart = async () => {
    setCart(await commerce.cart.empty());
    // console.log(cart)
  }
  const UpdateCartItemQty = async (prodId, qty) => { 
    const cart = await commerce.cart.update(prodId, {quantity:qty});
    setCart(cart);
  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Router>
      <NavWrapper>
        <Navbar totalCartItems={cart?.total_items} />
      </NavWrapper>
        <Routes>
          <Route path="/" element= {<ProductList data={products} HandleAddToCart={HandleAddToCart}/>} />
          <Route 
            path="/cart" 
            element= {
              <CartList 
              cart={cart}
              HandleEmptyCart={HandleEmptyCart}
              UpdateCart={UpdateCartItemQty}
            />} 
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
const NavWrapper = styled.div`
  background-color: #263238;
`;

export default App;
