import { top, jg, mid, adc, supp, ninguno } from "../assets";
import React, { useEffect, useState } from "react";
import styles, { layout } from "../style";
import { useInView } from "react-intersection-observer";

import Atop from "./Atop";
import Ajg from "./Ajg";
import Amid from "./Amid";
import Aadc from "./Aadc";
import Asupp from "./Asupp";

const Billing = () => {
  const [activeRole, setActiveRole] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  return (
    <section id="product" ref={ref}>
      <div className={`${layout.sectionInfo} ${isVisible ? "slide-in" : ""}`}>
        <h2 className={styles.heading2}>
          Rol <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Bien! persona especial, ahora vamos a enfocarnos individualmente en
          tus roles y liga.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gradient`}>
          Dime, qué rol juegas?
        </p>

        <div className={`${styles.paragraph} max-w-[470px] mt-5 text-gradient`}>
          <button
            onClick={() => handleRoleClick("role1")}
            style={{ marginRight: "20px" }}
            className={activeRole === "role1" ? "hidden-role" : ""}
          >
            <img
              style={{ marginLeft: "20px", width: "40px" }}
              src={top}
              alt="top icon"
            />
            Superior
          </button>
          <button
            onClick={() => handleRoleClick("role2")}
            style={{ marginRight: "20px" }}
            className={activeRole === "role2" ? "hidden-role" : ""}
          >
            <img
              style={{ marginLeft: "20px", width: "35px" }}
              src={jg}
              alt="jg icon"
            />
            Jungla
          </button>
          <button
            onClick={() => handleRoleClick("role3")}
            style={{ marginRight: "20px" }}
            className={activeRole === "role3" ? "hidden-role" : ""}
          >
            <img
              style={{ marginLeft: "20px", width: "40px" }}
              src={mid}
              alt="mid icon"
            />
            Medio
          </button>
          <button
            onClick={() => handleRoleClick("role4")}
            style={{ marginRight: "20px" }}
            className={activeRole === "role4" ? "hidden-role" : ""}
          >
            <img
              style={{ marginLeft: "20px", width: "40px" }}
              src={adc}
              alt="adc icon"
            />
            Tirador
          </button>
          <button
            onClick={() => handleRoleClick("role5")}
            className={activeRole === "role5" ? "hidden-role" : ""}
          >
            <img
              style={{ marginLeft: "20px", width: "47px" }}
              src={supp}
              alt="supp icon"
            />
            Soporte
          </button>
          <button
            onClick={() => handleRoleClick(null)}
            className={activeRole === null ? "hidden-role" : ""}
            style={{ marginLeft: "20px" }}
          >
            <img
              style={{ marginLeft: "15px", width: "47px" }}
              src={ninguno}
              alt="supp icon"
            />
            Ninguno
          </button>
        </div>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={` ${isVisible ? "slide-in-from-right" : ""} flex-col`}>
        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {activeRole === null ? (
            <p className={`${styles.paragraph} text-gradient`}>
              Vas a necesitar dominar 2 roles y te recomiendo por lo menos saber
              las bases de los otros roles que no sean los tuyos.
            </p>
          ) : (
            ""
          )}
          {activeRole === "role1" && <Atop />}
          {activeRole === "role2" && <Ajg />}
          {activeRole === "role3" && <Amid />}
          {activeRole === "role4" && <Aadc />}
          {activeRole === "role5" && <Asupp />}
        </div>
      </div>
    </section>
  );
};
export default Billing;
