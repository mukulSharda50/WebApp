import {Navbar, ProductList, CartList} from './components';
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
    setCart(data);
  }
  const HandleAddToCart = async (prodId, qty) => {
    const cartItem = await commerce.cart.add(prodId, qty);
    console.log(cart)
    setCart(cartItem.cart);
  }
  useEffect(()=>{
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Router>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
        <Routes>
          <Route path="/" element= {<ProductList data={products} HandleAddToCart={HandleAddToCart}/>} />
          <Route path="/cart" element= {<CartList />} />
        </Routes>
      </Router>
    </div>
  );
}
const NavWrapper = styled.div`
  background-color: #263238;
`;

export default App;
