import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = menuRef.current;
      const toggle = toggleRef.current;

      if (!menu || !toggle) return;

      const clickedOutsideMenu = !menu.contains(event.target as Node);
      const clickedOutsideToggle = !toggle.contains(event.target as Node);

      if (clickedOutsideMenu && clickedOutsideToggle) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="fade-in">
        <div className="img">
          <img src="img/EdgarAllanPoe.jpg" alt="Edgar Allan Poe" />
          <h1>Edgar Allan Poe</h1>
        </div>

        <div className="links-button">
          {/* Toggle */}
          <div
            className="toggle"
            id="toggle"
            ref={toggleRef}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              id="bars"
            ></i>
          </div>

          {/* Menú mobile */}
          <div
            className={`menu ${menuOpen ? "menu-open" : ""}`}
            id="menu"
            ref={menuRef}
          >
            <li>
              <a href="#carrera">Carrera</a>
            </li>
            <li>
              <a href="#muerte">Muerte y misterio</a>
            </li>
            <li>
              <a href="#relatos">Relatos</a>
            </li>
            <li>
              <a href="img/Antología - Edgar Allan Poe.pdf" download>
                ¡Descarga su antología!
              </a>
            </li>
          </div>

          {/* Normal menú */}
          <ul className="links">
            <li>
              <a href="#carrera">Carrera</a>
            </li>
            <li>
              <a href="#muerte">Muerte y misterio</a>
            </li>
            <li>
              <a href="#relatos">Relatos</a>
            </li>
          </ul>
          <a
            href="src/Antología - Edgar Allan Poe.pdf"
            download
            className="button-books"
          >
            ¡Descarga su antología!
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
