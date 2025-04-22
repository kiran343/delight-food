import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Sweet from './pages/Sweet';
import Snack from './pages/Snack';
import Snack2 from './pages/Snack2';
import Snack3 from './pages/Snack3';
import Masala from './pages/Masala';
import Masala2 from './pages/Masala2';
import Pickle from './pages/Pickle';
import Pickle2 from './pages/Pickle2';
import Mukhwas from './pages/Mukhwas';
import Mukhwas2 from './pages/Mukhwas2';
import Rice from './pages/Rice';
import Shar from './pages/Shar';
import Cart from './pages/Cart';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Forms from './pages/Forms';
import Login from './pages/Login';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Sweet/>}/>
        <Route path='/snack' element={<Snack/>}/>
        <Route path='/snack2' element={<Snack2/>}/>
        <Route path='/snack3' element={<Snack3/>}/>
        <Route path='/masala' element={<Masala/>}/>
        <Route path='/masala2' element={<Masala2/>}/>
        <Route path='/pickle' element={<Pickle/>}/>
       <Route path='/Pickle2' element={<Pickle2/>}/>
       <Route path='/Mukhwas' element={<Mukhwas/>}/>
       <Route path='/Mukhwas2' element={<Mukhwas2/>}/>
       <Route path='/Rice' element={<Rice/>}/>
       <Route path='/shar' element={<Shar/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/upload' element={<Upload/>}/>
       <Route path='/update' element={<Update/>}/>
       <Route path='/edit/:id' element={<Edit/>} leader={({params})=>
         fetch(`http/localhost:3000/allproducts/${params.id}`)}/> 
  <Route path='/forms' element={<Forms/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/sweet' element={<Sweet/>}/>

      </Routes>
  
   <Footer/>
   </BrowserRouter>
   </div>
  );
}

export default App;
