
import { Route, Routes } from "react-router-dom"
import { ClienteNavbar } from "../components/cliente/ClienteNavbar"
import { MisOrdenesCliente } from "../components/cliente/MisOrdenesCliente"
import { NuevaOrdenCliente } from '../components/cliente/NuevaOrdenCliente';
import { PaginaCliente } from '../screens/PaginaCliente';

export const RutasCliente = () => {
  
  return (
    <>
      <ClienteNavbar />
      <Routes>
        <Route path="/" element={<PaginaCliente />}/>
        <Route path="mis-ordenes" element={<MisOrdenesCliente />}/>
        <Route path="nueva-orden" element={<NuevaOrdenCliente />}/>
        <Route path="mi-perfil" element={<MisOrdenesCliente />}/>
      </Routes>
    </>
  )
}
