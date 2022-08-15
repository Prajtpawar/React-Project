import './App.css';
import Nav from './Component/Nav';
import{BrowserRouter,Route,Routes} from 'react-router-dom'

import Footer from './Component/Footer';
import Sineup from './Component/Sineup';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductsList from './Component/ProductsList';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route exact path='/' element={<ProductsList/>}/>
        <Route exact path='/add' element={<AddProduct/>}/>
        <Route exact path='/update/:id' element={<UpdateProduct/>}/>
        <Route exact path='/logout' element={<h1>Product Logout Component</h1>}/>
        <Route exact path='/profile' element={<h1>Product Profile Component</h1>}/>
        </Route>
        <Route path='/login'element={<Login/>}/>
        <Route path='/sineup' element={<Sineup/>}/>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
