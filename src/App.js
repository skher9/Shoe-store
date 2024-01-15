import './App.css';
import Items from './Pages/Items';
import store  from './redux/store';
import Wishlist from './Pages/Wishlist'
import SignIn from './Pages/SignIn'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp';
import Product from './Pages/Product'
import { Provider } from 'react-redux';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Items' element={<Items/>}/>
      <Route path='/SignIn' element={<SignIn/>}/> 
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Wishlist' element={<Wishlist/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product/:id/' element={<Product/>}/>
      <Route path='/Items/:name/' element={<Items/>}/>
      <Route path='/Checkout' element={<Checkout/>}/>
     </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
