import React, { useEffect } from "react";
import BiographySection from "@/hooks/BiographySection";

const Biography = () => {


  return (
    <div className="sections-div">
      <section className="section" id="intro" data-aos="fade-down">
        <div className="content">
          <img
            src="img/edgar-allan-poe.png"
            className="bio-img"
            alt="Edgar Allan Poe"
          />
          <div className="fun-fact">
            <h2>Nacimiento</h2>
            <p className="typewriter">
              Edgar Allan Poe nació en Boston, Estados Unidos en 1809. Sus
              padres murieron cuando él todavía era niño, y se dedicó a la
              escritura de relatos cortos, intentado hacer de esta su forma de
              vida (fue el primer escritor estadounidense en intentar esto)
            </p>
          </div>
        </div>
      </section>
      <BiographySection/>
      <section className="section" data-aos="fade-down">
        <div className="content" id="muerte">
          <img src="img/virginiaEdgar.webp" alt="Virginia & Edgar" />
          <div className="fun-fact">
            <h2>Muerte y misterio</h2>
            <p>
              Trágicamente su mujer murió dos años después de tuberculosis, y
              otros dos años después él también falleció en 1849 a los cuarenta
              años de edad. Su causa de muerte no es clara, pero no muere por
              causas naturales y su gran sueño de editar su propio periódico
              (The Stylus) nunca se cumplió.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
