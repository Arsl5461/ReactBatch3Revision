import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Navbar';
import SmartWatches from './pages/SmartWatches';
import Earbuds from './pages/Earbuds';
import Contact from './pages/Contact';
import "./App.css"
import ProductDescription from './pages/ProductDescription';

function App() {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/:id' element={<ProductDescription/>}></Route>
    <Route path='/smartwatches' element={<SmartWatches/>}></Route>
    <Route path='/earbud' element={<Earbuds/>}></Route>
    <Route path='/support' element={<Contact/>}></Route>

   </Routes>
   </>
  );
}

export default App;
