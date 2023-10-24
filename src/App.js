import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './components/Pages/ShopCategory';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/mens' element={<ShopCategory category="mens"/>}/>
                <Route path='/womens' element={<ShopCategory category="womens"/>}/>
                <Route path="product" element={<Product/>}>
                    <Route path=':productId' element={<Product/>}/>
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;