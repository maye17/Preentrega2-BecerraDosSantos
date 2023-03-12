import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer/index'


//paginas
import Home from './pages/Home/index'
import ItemDetailContainer from './pages/ItemDetailContainer/index'
import ItemListContainer from './pages/Cursos/index'
import Servicios from './pages/Servicios/index'
import Contacto from './pages/Contacto/index'
import Itemcategory from './pages/Category/index'

import CartProvider  from './context/CartContext'
import Compra from './pages/Compra/index';
import Error from './pages/Error';


function App() {
  return (
    <>
    <Router>
       <CartProvider>
       <NavBar />
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Curso' element={<ItemListContainer/>}/>
         <Route path='/categories/:category' element={<Itemcategory/>}/>
         <Route path='/Servicios' element={<Servicios/>}/>
         <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
         <Route path='/Contacto' element={<Contacto/>}/>
         <Route path='/Cart' element={<Compra/>}/>
         <Route path='*' element={<Error/>}/>
       </Routes>
       <Footer />
    </CartProvider>
    </Router>
    </>
  );
}

export default App;
