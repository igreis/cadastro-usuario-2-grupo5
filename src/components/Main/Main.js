import { Link } from 'react-router-dom'
import React from "react";
import "./style.css";
import minhaFuncao from "./MinhaFuncao";

const Main = ({ userData, setUserData }) => {
  const handleClick = (e) => {
    e.preventDefault()
    minhaFuncao(userData);
  };


  return (
    <>
    <h1 className='tit'>
      Faça seu cadastro
    </h1>
      <div className="sing-in">
        <form onSubmit={ handleClick}>
          <input className='input_email' type="email" placeholder="Email" onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
          <input className='input_nome' type="text" placeholder="Nome" onChange={(e) => { setUserData({ ...userData, nome: e.target.value }) }}/>
          <div>
            <input className='input_numero' type="number" placeholder="Número de Telefone" onChange={(e) => { setUserData({ ...userData, numero: e.target.value }) }}/>
            <input className='input_senha' type="password" placeholder="Senha" onChange={(e) => { setUserData({ ...userData, senha: e.target.value }) }}/>
          </div>
          <button type="submit" class="button primary">Cadastrar</button>
        </form>
      </div>
    </>
  )
};

export default Main;