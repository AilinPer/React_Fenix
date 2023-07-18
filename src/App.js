import React from "react";
import { useEffect, useState } from "react";
import "../src/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Navbar  from "./components/NavBar/Navbar";
import CardUser from "./components/CardUser/CardUser"

//Pages
import ContactoPages from "./components/pages/ContactoPages/ContactoPages";
import InicioPages from "./components/pages/InicioPages/InicioPages";
import FiltradoPages from "./components/pages/FiltradoPages/FiltradoPages";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import Category from "./components/pages/Category/Category";
import Header from "./components/Header/Header"

//firebase
import { db } from "./firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore";


const App = () => {
  const [libros, setlibros] = useState([])

  useEffect(() => {
    const getLibros = async() => {
      const q = query(collection(db, "libros"))
      const docs = []
      const querySnapshot = await getDocs(q)
      //console.log(querySnapShot)
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data())
        docs.push({...doc.data(), id:doc.id})
      });
      setlibros(docs)
    }
    getLibros()
  }, [])


    return (
      <Router>
        <div className="App">
          <CardUser/>
          <Header/>
          <Navbar />
          <Routes>
            <Route path="/" element={<InicioPages/>}/>
            <Route path="/Filtrado" element={<FiltradoPages/>}/>
            <Route path="/Contacto" element={<ContactoPages/>}/>
            <Route path="/Detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Category/:categoriaid" element={<Category/>}/>
          </Routes>
        </div>
      </Router>
    )
  }

export default App