import { motion, useScroll, useTransform } from "framer-motion";
import "./about.scss";
import { useRef } from "react";

const popupVariant = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const About = () => {
  const divRef = useRef();

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="about"
      style={{ background: "linear-gradient(180deg, #111132, #505064)" }}
      ref={divRef}
    >
      <motion.div
        variants={popupVariant}
        initial="initial"
        whileInView={"animate"}
        style={{ y: yText }}
        className="about_text"
      >
        <motion.h1>About</motion.h1>
        <p>
          Passionate full-stack web developer adept at integrating front-end and
          back-end based applications. Experienced in developing web pages using
          HTML, CSS and JavaScript. Ambitious and self-motivated, with
          considerable technical skills who possesses self- discipline and
          ability to work with minimum supervision. A quick learner who can
          absorb new ideas and communicate clearly and effectively to create
          websites with enhanced user experience.
        </p>
      </motion.div>

      <motion.div className="mountain"></motion.div>

      <motion.div style={{ y: yBg }} className="planets"></motion.div>

      <motion.div style={{ y: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default About;
