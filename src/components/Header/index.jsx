import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { BiSearchAlt2, BiMenu } from "react-icons/bi";
import "./styles.css";

function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">Movies Library</Link>
      </h2>

      <form
        className={`search-bar ${menuOpen ? "open" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="input-search"
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>

      <button
        className={`menu-toggle ${menuOpen ? "rotated" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <BiMenu />
      </button>
    </nav>
  );
}

export default Header;
