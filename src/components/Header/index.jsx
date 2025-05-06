import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./styles.css";

function Header() {
  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/"><img src={logo} alt="logo" /> Movies Library</Link>
        </h2>
        <form>
          <input type="text" placeholder="Busque um filme" />
          <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </nav>
    </div>
  );
}

export default Header;
