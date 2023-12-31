import React from "react";
import ListagemClient    from "../components/ListagemClientes";
import CadastroCliente from "../components/CadastroCliente";
import { 
    BrowserRouter,
     Route,
     Routes
} from "react-router-dom";
import CadastroServico from "../components/CadastroServico";
import ListagemServicos from "../components/ListagemServico";
import CadastroProfssional from "../components/CadastroProfissional";
import ListagemProfissionais from "../components/ListagemProfissionais";
import EditarCliente from "../components/EditarCliente";
import EditarServico from "../components/EditarServico";
import EditarProfissional from "../components/EditarProfissional";
import CadastroAgenda from "../components/CadastroAgenda";
import ListagemAgenda from "../components/ListagemAgenda";
import EditarAgenda from "../components/EditarAgenda";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="cliente/cadastro" element={<CadastroCliente/>}/>
            <Route path="cliente/listagem" element={<ListagemClient/>}/>
            <Route path="cliente/editar/:id" element={<EditarCliente/>}/>
            

            <Route path="cadastro/Servico" element={<CadastroServico/>}/>
            <Route path="listagem/Servico" element={<ListagemServicos/>}/>
            <Route path="/editar/Servico/:id" element={<EditarServico/>}/>

            <Route path="listagem/Profissional" element={<ListagemProfissionais/>}/>
            <Route path="CadastroProfissional" element={<CadastroProfssional/>}/>
            <Route path="/editarProfissopnal/:id" element={<EditarProfissional/>}/>

            <Route path="agenda/criar" element={<CadastroAgenda/>}/>
            <Route path="listagem/agenda" element={<ListagemAgenda/>}/>
            <Route path="editar/Agenda/:id" element={<EditarAgenda/>}/>

        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter