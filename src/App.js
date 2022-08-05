import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Button from './components/Button/Button';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Listado de Productos Completo" />} />
            <Route path="/details/:IdProducto" element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
