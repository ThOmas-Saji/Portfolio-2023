import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { myProjects } from "./projects";

const SingleProject = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 50]);

  return (
    <section>
      <div className="container">
        <motion.div className="wrapper" ref={ref}>
          <motion.div
            style={{
              x: -100,
              transition: "all 0s",
            }}
            whileInView={{
              x: 0,
            }}
            className="image_container"
          >
            <img src={item?.thumbnail} />
          </motion.div>
          <motion.div className="text_container" style={{ y }}>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <p>{item?.techStack}</p>
            <div className="btn_wrapper">
              {item?.gitHubLink && (
                <button className="glowing-box">
                  <a
                    href={item?.gitHubLink}
                    // className="btn_orange"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </button>
              )}
              {item?.live && (
                <a
                  href={item?.live}
                  className="btn_white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const divRef = useRef();

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={divRef}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {myProjects?.map((item) => (
        <SingleProject item={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Portfolio;
