import './App.css';

import Navbar from './components/Navbar/Navbar';

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
            <Route path="/" element={<ItemListContainer greeting="Listado de Productos Zima" />} />
            <Route path="/category/:IdCategoria" element={<ItemListContainer greeting="Productos Filtrados" />} />
            <Route path="/details/:IdProducto" element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
