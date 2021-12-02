import ListarOrdenesPage from "./pages/ListarOrdenes"
import EditarRutasPage from "./pages/EditarRutas"
import Home from "./pages/home";
import './styles.css';
import "./componentes/ListarOrdenes.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListarOrdenes" element={<ListarOrdenesPage />} />
        <Route path="/EditarRutas" element={<EditarRutasPage />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
