import React from "react";
import "../src/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar  from "./components/NavBar/Navbar";

//Pages
import ContactoPages from "./components/pages/ContactoPages/ContactoPages";
import InicioPages from "./components/pages/InicioPages/InicioPages";
import FiltradoPages from "./components/pages/FiltradoPages/FiltradoPages";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import Category from "./components/pages/Category/Category";
import Header from "./components/Header/Header"




const App = () => {
    return (
      <div className="App">
        
        <Router>
          <Header/>
          <Navbar />
          <Routes>
            <Route path="/" element={<InicioPages/>}/>
            <Route path="/Filtrado" element={<FiltradoPages/>}/>
            <Route path="/Contacto" element={<ContactoPages/>}/>
            <Route path="/Detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Category/:categoriaid" element={<Category/>}/>
          </Routes>
        </Router>
      </div>
    )
  }

export default App