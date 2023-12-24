import './App.css';
import Items from './Components/Items';
import store  from 'redux';
import { Provider } from 'react-redux';
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Items' element={<Items/>}/>
     </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
