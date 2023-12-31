import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles  from "../App.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditarAgenda = () => {
    const [profissional_Id, setProfissional_Id] = useState<string>("");
    const [cliente_Id,setCliente_Id] = useState<string>("");
    const [servico_Id,setServico_Id] = useState<string>("");
    const [dataHora,setDataHora] = useState<string>("");
    const [pagamento,setPagamento] = useState<string>("");
    const [valor,setValor] = useState<string>("");
    const [uf, setUf] = useState<string>("");
    const [erro, setErro] = useState<string>("");
    
    const cadastrarAgenda = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            profissional_Id: profissional_Id,
            cliente_Id: cliente_Id,
            servico_Id: servico_Id,
            dataHora: dataHora,
            pagamento: pagamento,
            valor: valor,
        }

        console.log(dados)

        axios.post('http://127.0.0.1:8000/api/agenda/update',
        dados,
        {
            headers:{
                "Accept": "aplication/json",
                "Content-Type": "aplication/json"
            }
        }
        ).then(function(response){
            console.log(response.data)
            window.location.href = "/agenda/retornaTodos"
        }).catch(function(error){
            console.log(error)
        })
    }
    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "profissional_Id"){
            setProfissional_Id(e.target.value)
        }
        if(e.target.name === "cliente_Id"){
            setCliente_Id(e.target.value)
        }
        if(e.target.name === "servico_Id"){
            setServico_Id(e.target.value)
        }
        if(e.target.name === "dataHora"){
            setDataHora(e.target.value)
        }
        if(e.target.name === "pagamento"){
            setPagamento(e.target.value)
        }
        if(e.target.name === "valor"){
            setValor(e.target.value)
        }
    }

    

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-tittle'>Cadastrar Agenda</h5>
                            <form onSubmit={cadastrarAgenda} className='row g-3'>
                            <div className='col-6'>
                                    <label htmlFor="profissional_Id" className='from-label'>ID do profissional</label>
                                    <input 
                                    type="integer" 
                                    name='profissional_Id' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="setCliente_Id" className='from-label'>ID do cliente</label>
                                    <input 
                                    type="integer" 
                                    name='setCliente_Id' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="duracao" className='from-label'>ID do serviço</label>
                                    <input 
                                    type="text" 
                                    name='duracao' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="preco" className='from-label'>Data e hora</label>
                                    <input 
                                    type="text" 
                                    name='preco' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="preco" className='from-label'>Tipo de pagamento</label>
                                    <input 
                                    type="text" 
                                    name='preco' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="preco" className='from-label'>Valor</label>
                                    <input 
                                    type="text" 
                                    name='preco' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                
                               
                                <div className='col-12'>
                                    <button  type='submit' className='btn btn-success btn-sm'>Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default EditarAgenda;
