import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nosotros from './components/Nosotros'

function App() {

  return (
      <div>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />}  />
            <Route path="/productos" element={<ItemListContainer/>} />
            <Route path="/productos/:categoria" element={<ItemListContainer/>} />
            <Route path='/nosotros' element={<Nosotros />}></Route>


          </Routes>
          
        </BrowserRouter>
      </div>
  );
}

export default App;
