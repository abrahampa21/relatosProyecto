import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="img">
          <img src="../src/EdgarAllanPoe.jpg" alt="Edgar Allan Poe" />
          <h1>Edgar Allan Poe</h1>
        </div>

        <div className="links-button">
          {/* BOTÓN HAMBURGUESA */}
          <div
            className="toggle"
            id="toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              id="bars"
            ></i>
          </div>

          {/* MENÚ  */}
          <div className={`menu  ${menuOpen ? "menu-open" : ""}`} id="menu">
            <li>
              <a href="#dato2">Carrera</a>
            </li>
            <li>
              <a href="#dato3">Muerte y misterio</a>
            </li>
            <li>
              <a href="#relatos">Relatos</a>
            </li>
            <li>
              <a href="#">
                ¡Descarga su antología!
              </a>
            </li>
          </div>

          <ul className="links">
            <li>
              <a href="#dato2">Carrera</a>
            </li>
            <li>
              <a href="#dato3">Muerte y misterio</a>
            </li>
            <li>
              <a href="#relatos">Relatos</a>
            </li>
          </ul>
          <a href="#" className="button-books">
            ¡Descarga su antología!
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
