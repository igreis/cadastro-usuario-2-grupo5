import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <ul>
          <li>
            <a
              href="https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp"
              target="_blank"
            >
              CNPJ: 42.630.787/0001-15
            </a>
          </li>
          <li>
            <a href="https://github.com/Cardosofiles" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-b-cardoso-2b0442268/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/joaobaatissta/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100075815810142"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
        <p class="copyright">&copy; Grupo 5 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
