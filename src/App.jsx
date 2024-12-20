import React, { useEffect, useState } from "react";

import styles from "./style";
import { Billing, Business, Footer, Navbar, Hero, Juego } from "./components";



const App = () => {
 
  const handleSpacebarScroll = (e) => {
    if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
    }
  };

  
  useEffect(() => {
    window.addEventListener("keydown", handleSpacebarScroll);
    return () => {
      window.removeEventListener("keydown", handleSpacebarScroll);
    };
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <Juego />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
