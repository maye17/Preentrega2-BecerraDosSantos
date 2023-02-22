import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

//componentes
import NavBar from './components/NavBar';

//paginas
import Home from './pages/Home/index'
 import ItemListContainer from './pages/ItemListContainer/index';
import ItemDetailContainer from './pages/ItemDetailContainer/index'
import ItemListContainerCat from './pages/ItemListContainerCat';



function App() {
  return (
    <Router>
      <div className='App'>
       <NavBar />
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Cosmeticos' element={<ItemListContainer/>}/>
         <Route path='/category/:id' element= {<ItemListContainerCat/>}/>
         <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
       </Routes>
       </div>
    </Router>
    
  );
}

export default App;
