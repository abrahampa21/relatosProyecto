import { useState, useEffect } from "react";

const BiographySection = () => {
  const [aosEffect, setAosEffect] = useState(() =>
    window.innerWidth >= 650 ? "fade-down" : "fade-left"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setAosEffect("fade-down");
      } else {
        setAosEffect("fade-right");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section" data-aos={aosEffect}>
      <div className="content" id="carrera">
        <img src="img/poeCatterina.jpg" alt="Edgar Allan Poe" />
        <div className="fun-fact">
          <h2>Carrera</h2>
          <p>
            Es considerado como el inventor del relato detectivesco, contribuyó
            al surgimiento de la ciencia ficción, y su principal género fué la
            novela gótica. Por necesidad económica se dedicó a la prosa,
            escribiendo relatos y crítica literaria para varios periódicos y
            adquiriendo cierta notoriedad por su estilo de escritura cáustica y
            elegante. Su aclamo a la fama fue la escritura del poema, “El
            Cuervo”, en 1845.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
