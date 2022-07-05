import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Galeria } from "./components/Galeria";

import { Home } from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/galeria" element={<Galeria></Galeria>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
