import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//componentes
import NavBar from './components/NavBar';



//paginas
import Home from './pages/Home/index'
import ItemDetailContainer from './pages/ItemDetailContainer/index'
import ItemListContainer from './pages/Cursos/index'
import Servicios from './pages/Servicios/index'
import Contacto from './pages/Contacto/index'
import Itemcategory from './pages/Category/index'

import CartProvider  from './context/CartContext'
import Cart from './components/Carrito/index';
/* import Error from './pages/Error'; */


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
         <Route path='/Cart' element={<Cart/>}/>
      {/*    <Route path='*' element={<Error/>}/> */}
       </Routes>
    </CartProvider>
    </Router>
    </>
  );
}

export default App;
