import {Navbar, ProductList, CartList} from './components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

function App() {
  return (
    <div>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <Router>
        <Routes>
          <Route path="/" element= {<ProductList />} />
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
