import React, { useEffect, useState } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { useInView } from "react-intersection-observer";
import "../index.css";

const FeatureCard = ({ icon, title, content, index }) => {
  const paragraphs = content.split("\n").map((paragraph, i, array) => (
    <React.Fragment key={i}>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {paragraph}
      </p>
      {i < array.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        {paragraphs}
      </div>
    </div>
  );
};

const Business = () => {
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
    <section id="features">
      <div className={`${isVisible ? "" : "slide-in-from-right"} flex-col `}>
        <h2 className={`${styles.heading2} text-gradient`}>Introducción</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Bien! Antes de que me digas tu rol, vamos a repasar de forma general
          los 5 puntos fundamentales que quizás ya conocías y que
          profundizaremos más adelante según tu rol.
        </p>
      </div>

      <div className={`${isVisible ? "" : "slide-in-right"} flex-col `}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
