import { useRef } from "react";
import "./home.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    y: -500,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-20%",
    transition: {
      duration: 10,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="text_container"
          variants={textVariants}
          initial="initial"
          // animate={"animate"}
          whileInView={"animate"}
        >
          <motion.h2 variants={textVariants}>Thomas Saji</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer (MERN stack)
          </motion.h1>
          <motion.div variants={textVariants} className="btns">
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              <a href="#Projects">See the Latest Works</a>
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "#fff",
                color: "#000",
              }}
              variants={textVariants}
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            variants={textVariants}
            animate="scrollButton"
            alt="btn"
          />
        </motion.div>
      </div>
      <motion.div
        variants={slideVariants}
        initial="initial"
        animate="animate"
        className="sliding_text"
      >
        Full Stack web developer
      </motion.div>
      <div className="image_container">
        <img src="/side-me.webp" alt="user image" />
      </div>
    </div>
  );
};

export default Home;
