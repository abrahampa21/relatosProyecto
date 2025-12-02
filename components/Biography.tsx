const Biography = () => {
  return (
    <div className="sections-div">
      <section className="section" id="intro" data-aos="fade-down">
        <div className="content">
          <img src="img/edgar-allan-poe.png" className="bio-img" alt="Edgar Allan Poe" />
          <p className="fade-in">
            Edgar Allan Poe nació en Boston, Estados Unidos en 1809. Sus padres
            murieron cuando él todavía era niño, y se dedicó a la escritura de
            relatos cortos, intentado hacer de esta su forma de vida (fue el primer
            escritor estadounidense en intentar esto)
          </p>
        </div>
      </section>
      <section className="section" data-aos="fade-down" >
        <div className="content" id="carrera">
          <img src="img/poeCatterina.jpg" alt="Edgar Allan Poe" />
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
      </section>
      <section className="section" data-aos="fade-down">
        <div className="content"  id="muerte">
          <img src="img/virginiaEdgar.webp" alt="Virginia & Edgar" />
          <p>
            Trágicamente su mujer murió dos años después de tuberculosis, y
            otros dos años después él también falleció en 1849 a los cuarenta
            años de edad. Su causa de muerte no es clara, pero no muere por
            causas naturales y su gran sueño de editar su propio periódico (The
            Stylus) nunca se cumplió.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Biography;
