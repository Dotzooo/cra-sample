
import { useReducer } from "react";

import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";
import NotFound from "./pages/NotFound";

import { CartContext, cartReducer, cartInit } from "./store";
import AlbumSearch from "./pages/AlbumSearch";



function App() {
  const reducer = useReducer(cartReducer, cartInit)
  
  return (
    <CartContext.Provider value={reducer}>

      <Navbar />
      <div className="container mt-5">
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/album' element={<AlbumLayout />}>
                <Route index element={<AlbumIndex />}></Route>
                <Route path="search" element={<AlbumSearch />}></Route>
                <Route path=":id" element={<AlbumPhoto />}></Route>
              </Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
      </div>
    
    </CartContext.Provider>
  );
}


export default App;

