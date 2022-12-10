import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//import { GaleriaImagenes } from "./components/GaleriaImagenes";

import { Home } from "./components/Home";
import { SeccionEventos } from "./components/SeccionEventos";
import { SeccionLugar } from "./components/SeccionLugar";
import { SeccionSabores } from "./components/SeccionSabores";
import { TortaPage } from "./components/TortaPage";
import { TortasPersonalizadas } from "./components/TortasPersonalizadas";

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
          {/*<Route path="/galeria" element={<Galeria></Galeria>}></Route>*/}
          {/*<Route path="/galeria" element={<GaleriaImagenes />}></Route>*/}
          <Route
            path="/personalizada"
            element={<TortasPersonalizadas />}
          ></Route>
          <Route path="torta/:id" element={<TortaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
