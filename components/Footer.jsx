const Footer = () => {
  return (
    <footer>
      <div className="info">
        <div className="credits">
          <p>
            En honor al maestro del misterio y lo macabro: Edgar Allan Poe.{" "}
            <br />
            <i>Las sombras cuentan historias... si sabes escucharlas.</i>
            <br />
            Este sitio es un proyecto educativo/fan. 
            <br />
            Las obras de Edgar Allan Poe pertenecen al dominio público. 
            <br />
            Las imágenes utilizadas son propiedad de sus respectivos autores.
          </p>
        </div>
        <div className="social-medias">
            <h3>Nuestras redes sociales</h3>
            <div className="icons">
                                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
      </div>
      <p className="copyright">
        Todos los derechos reservados &copy; The Organizers
      </p>
    </footer>
  );
};

export default Footer;
