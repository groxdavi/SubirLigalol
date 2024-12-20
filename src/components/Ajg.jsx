import React from "react";
import { jg } from "../assets";

const Ajg = () => {
  return (
    <div>
      <img src={jg} alt="star" className="w-[50%] h-[50%] object-contain" />
      <h1 className="text-gradient">Jg-Jungla</h1>
      <h1>
        La jungla! una de las mejores posiciones para subir... Generalmente lo
        más importante son 3 temas: invades, trackear(saber que hará o dónde
        estará el jg enemigo), farmeo, y ganks.
      </h1>

      <p>
        Vamos a enfocarnos en subir, entonces básicamente para tu objetivo
        tenemos que centrarnos en lo siguiente:
        <br />
        <br />
        <span className="text-gradient"> Invades:Te lo hago fácil..</span>
        <br />
        <br />
        Cada partida es diferente por lo que según como van tus líneas vas a
        tener que tomar la decisión de invadir por la parte del mapa que a tu
        equipo le vaya bien(bastante lógico verdad?).Aplícalo En este caso vas a
        jugar siempre agresivo, por el lado del mapa en el que tu equipo vaya
        mejor.
        <br />
        <br />
        <span className="text-gradient">
          Te voy a dar un ej según los picks:
        </span>
        <br />
        <br />
        <span className="text-gradient">si el jg rival es un tanque:</span>
        pickea kindred o un champ que consideres parecido,(en mi caso yo subi
        con dicho champ).
        <br />
        <br />
        <span className="text-gradient">si es asesino, mago, powerfarmer:</span>
        pickea un khazix o un maokai(tanque) depende tu elección.
        <br />
        <br />
        <span className="text-gradient">si es luchador:</span>
        pickea lee sin o un champ parecido(no saques tanque).
        <br />
        <br />
        <span className="text-gradient">trackear:</span>
        Esto lleva tiempo pero lo que necesitas saber por el momento es donde
        puede empezar su path el jg rival dependiendo de su champ. Cada partida
        te sacan diferentes campeones asi que aprende de eso. Si vos sabes que
        ganas el invade, lo que te recomiendo es empezar del lado opuesto e
        invadir el lado al que se dirige su path(bastante lógico verdad?)
        Aplícalo.
        <br />
        <br />
        <span className="text-gradient"> Farm:</span>
        Si eres menos de diamante puedes optar por jugar champ powerfarmer como
        diana, karthus, yi...entre otros.
        <br />
        <br />
        En estos casos olvidate del invade pero prioriza los ganks siempre y
        cuando sean del lado opuesto del path del jg rival(obviamente), ya que
        en esos elos se saca bastante ventaja aunque seas un champ de
        powerfarming.
        <br />
        <br />
        Si eres diamante+ juega a ganks y powerfarming.
        <br />
        <br />
        <span className="text-gradient">
          Los puntos fundamentales en los que vas a trabajar son:
        </span>
        <br />
        <br />
        <span className="text-gradient">Comunicación efectiva:</span>
        Utiliza el chat y los pings para comunicarte con tu equipo. La
        coordinación es clave en League of Legends, así que comunica tus planes,
        objetivos y movimientos.
        <br />
        <br />
        <span className="text-gradient">
          {" "}
          Map Awareness (Conciencia del mapa):
        </span>
        Constantemente revisa el minimapa para saber la ubicación de los
        enemigos(jg) y las oportunidades de gank. Revisa las oleadas de tus
        laners para saber en que momento gankear. Colocar wards (visión) también
        es fundamental para evitar sorpresas.
        <br />
        <br />
        <span className="text-gradient">Controla tus emociones:</span>
        Mantén la calma y evita las discusiones en el chat. La mentalidad
        positiva es esencial para mantener un buen rendimiento(esto te va a
        costar).
        <br />
        <br />
        <span className="text-gradient">Adaptabilidad y flexibilidad:</span>
        Aprende a adaptarte a diferentes composiciones de equipo y situaciones
        de juego. No siempre podrás jugar igual, así que sé flexible en tu
        enfoque.
        <br />
        <br />
        <span className="text-gradient">Mantén un horario de juego:</span> Juega
        todo el tiempo que puedas.
      </p>
    </div>
  );
};

export default Ajg;
