
import ReactDOMServer from "react-dom/server";
import "./style.css";
import React, { useEffect } from "react";
import './personalize.css'

const MinhaPagina = () => {



  return (
    <section className="languages">
      <div className="container">
        <h1 className="title">Linguagens</h1>
        <p></p>
        <div className="cards">
          <a
            className="card red"
            href="https://www.ruby-lang.org/"
            target="_blank"
          >
            Ruby
          </a>
          <a
            className="card blue"
            href="https://www.javascript.com/"
            target="_blank"
          >
            JavaScript
          </a>
          <a
            className="card color"
            href="https://www.java.com/"
            target="_blank"
          >
            Java
          </a>
          <a
            className="card yellow"
            href="https://www.python.org/"
            target="_blank"
          >
            Python
          </a>
          <a
            className="card gray"
            href="https://docs.microsoft.com/en-us/dotnet/csharp/"
            target="_blank"
          >
            C#
          </a>
          <a
            className="card purple"
            href="https://elixir-lang.org/"
            target="_blank"
          >
            Elixir
          </a>
          <a className="card green" href="https://golang.org/" target="_blank">
            Go
          </a>
          <a className="card hex" href="https://www.php.net/" target="_blank">
            PHP
          </a>
        </div>
      </div>
    </section>
  );
};

const minhaFuncao = (userData) => {

  const novaPagina = window.open("", "_blank");

  const novaPaginaHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Minha Nova Página</title>
        <style>
  body {
    background: linear-gradient(to right, #6ab7f5, #fff);
  }
  
  section {
    margin: 0 auto; /* centraliza horizontalmente */
    margin-top: 150px; /* adiciona um espaço em cima */
    max-width: 400px; /* define uma largura máxima */
    padding: 20px; /* adiciona um espaçamento interno */
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #E0EAFC;
  }

  .buton{
    background-color: #8BC34A;
  color: white;
  padding: 12px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  margin-top: 15px;
  }

  .butao{
    text-align: center;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  h1{
    font-size: 25px;
  }

  .container{
    position: absolute;
    top: 50px;
   left: 830px;
  }

</style>

      </head>
      <body>
      <div class="container">
      <h1>
        Confirme seus dados!
      </h1>
      </div>
        <section>
          <p><b>Email</b>: ${userData.email}</p>
          <p><b>Nome</b>: ${userData.nome}</p>
          <p><b>Número</b>: ${userData.numero}</p>
          <p><b>Senha</b>: ${userData.senha}</p>
        </section>
        
        <div class="butao">
          <button class="buton" onClick="if (confirm('Deseja confirmar o cadastro?')) { alert('Cadastro concluído!'); }"
          >Confirmar</button>
          <button class="buton" onClick="window.close()">Fechar</button>
        </div>
      </body>
    </html>
  `;

  novaPagina.document.write(novaPaginaHtml);
};


export default minhaFuncao;