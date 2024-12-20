import React, { useState } from "react";
import { top } from "../assets";

const Atop = () => {

  return (
    <div>
      <img src={top} alt="star" className="w-[50%] h-[50%] object-contain" />
      <h1 className="text-gradient">Top-Superior</h1>
      <h1>
        Uff, asi que eres top laner, generalmente lo más importante aquí es el
        conocer matchups(que campeón es mejor contra que campeón), gestión de
        oleadas, tus decisiones(especialmente cuando usar tp).
      </h1>
      <p>
        <span>
          Vamos a enfocarnos en subir, entonces básicamente para tu objetivo
          existen 3 tipos de campeones: Luchadores, Tanques, Rangos.
        </span>
        <br />
        <br />
        Vas a elegir 1 campeón por cada tipo, por ej: Malphite, akshan,
        fiora(los que usé yo para subir). La lógica es la siguiente:Vas a jugar
        agresivo al principio seas el champ que seas(esto te ayudará mucho a
        mejorar).
        <br /> Lo importante es que si te matan 1 vez
        <p className="text-gradient">vas a empezar a jugar en torre sin</p>{" "}
        importar que y te olvidas del montage, ahora si matas 1 vez seguis
        agresivo, pero sin intentar diveos, ya si vas 2 kills arriba podes
        intentarlo. Si no podes divearlo lleva tu ventaja a otras lineas o entra
        a la jg enemiga.
      </p>

      <p>
        <br />
        <br />
        <span className="text-gradient">
          {" "}
          Los puntos fundamentales que necesito que trabajes son:
        </span>
        <br />
        <br />
        <span className="text-gradient">
          Controla las oleadas de súbditos (creep waves):
        </span>
        Aprende a congelar, empujar o hacer recall en las oleadas de súbditos
        para controlar la presión en tu línea y darle una ventaja a tu equipo.
        <br />
        <br />
        <span className="text-gradient">Controla tus emociones: </span>Mantén la
        calma y evita las discusiones en el chat. La mentalidad positiva es
        esencial para mantener un buen rendimiento.
        <br />
        <br />
        <span className="text-gradient">Mantén un horario de juego:</span> Juega
        todo el tiempo que puedas.
        <br />
        <br />
        <span className="text-gradient">Aprende de tus errores:</span> Revisa
        tus partidas y analiza lo que hiciste bien y mal. Identifica áreas de
        mejora y trabaja en ellas. Obsesionate.
      </p>
    </div>
  );
};

export default Atop;


