import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

//componentes
import NavBar from './components/NavBar';

//paginas
import Home from './pages/Home/index'
/*  import ItemListContainer from './pages/ItemListContainer/index'; */
import ItemDetailContainer from './pages/ItemDetailContainer/index'
/* import ItemListContainerCat from './pages/ItemListContainerCat'; */
import CursoDetailContainer from './pages/CursoDetailContainer/index'



import Curso from './pages/Cursos/index'
import Servicios from './pages/Servicios/index'
import Contacto from './pages/Contacto/index'
import Indumentaria from './pages/Indumentaria/index';
import Maquillaje from './pages/Maquillaje/index';
import Master from './pages/Master';



function App() {
  return (
    <Router>
      <div className='App'>
       <NavBar />
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Curso' element={<Curso/>}/>
         <Route path="/category/Maquillaje" element={<Maquillaje/>}/>
         <Route path="/category/Master" element={<Master/>}/>
         <Route path='/Curso/:id' element= {<CursoDetailContainer/>}/>
         <Route path='/Servicios' element={<Servicios/>}/>
         <Route path='/Indumentaria' element={<Indumentaria/>}/>
         <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
         <Route path='/Contacto' element={<Contacto/>}/>
       </Routes>
       </div>
    </Router>
    
  );
}

export default App;
