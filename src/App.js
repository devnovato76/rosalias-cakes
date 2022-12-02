import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Galeria } from "./components/Galeria";

import { Home } from "./components/Home";
import { SeccionEventos } from "./components/SeccionEventos";
import { SeccionLugar } from "./components/SeccionLugar";
import { SeccionSabores } from "./components/SeccionSabores";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/sabores"
            element={<SeccionSabores></SeccionSabores>}
          ></Route>
          <Route path="/productos" element={<SeccionEventos />}></Route>
          <Route path="/lugar" element={<SeccionLugar></SeccionLugar>}></Route>
          <Route path="/galeria" element={<Galeria></Galeria>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
