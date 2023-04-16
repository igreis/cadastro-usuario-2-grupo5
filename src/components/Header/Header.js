import "./style.css";
import mainImage from "./CiÊncia da computação.png";

function Header() {

  return (
    <header>
      <div className="logo">
        <img src={mainImage} alt=""></img>
      </div>
    </header>
  );
}

export default Header;