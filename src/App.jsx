import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProducList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login'
import Register from './pages/Register';



function App() {
  return (
    <Routes>

      <Route path='/' element={ <Home />}></Route>
      <Route path='/products/:category' element={<ProducList/>}></Route>
      <Route path='/product/:id' element={ <Product />}></Route>
      <Route path='/cart' element={ <Cart/>}></Route>
      <Route path='/login' element={ <Login />}></Route>
      <Route path='/Register' element={ <Register />}></Route>
    </Routes>

  );
}

export default App;
