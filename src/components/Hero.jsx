import React, { useEffect, useState } from "react";
import styles from "../style";
import { discount, imageprincipal } from "../assets";
import { useInView } from "react-intersection-observer";
import "../index.css";

const Hero = () => {
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

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ${
          isVisible ? "slide-in" : "slide-in"
        }`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span>Contenido totalmente{" "}
            <span className="text-white">GRATIS</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Te enseño <br className="sm:block hidden" />{" "}
            <span className="text-gradient">A JUGAR</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          para que dejes de trollear..
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gradient`}>
          Si quieres dejar de perder y no trollearme las partidas, esto te
          interesa. Espero que enseñandote este contenido creemos una mejor
          comunidad.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative ${
          isVisible ? "slide-in-from-right" : "slide-in-from-right"
        } flex-col}`}
      >
        <img
          src={imageprincipal}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
