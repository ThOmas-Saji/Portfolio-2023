import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Book Club",
    des: "A book club webpage where user can browse books, intract with other people and talk about their favorite books",
    ts: " React | Redux | Socket io | MongoDB | JavaScript | HTML | CSS",
    image: "/book_club.png",
    github: "https://github.com/sreerag-rajan/book-club",
    live: "https://book-club-project.vercel.app/",
  },
  {
    id: 2,
    title: "Capital Movies",
    des: "Movies webpage where user can see latest and popular movies and details, if user logged in he can create a favorite movies list",
    ts: " React | Redux-toolkit | Nodejs | Express | MongoDB | JavaScript | CSS | Material UI",
    image: "/CapitalMovies.png",
    github: "https://github.com/ThOmas-Saji/Capital-Movies",
    live: "https://capital-movies-ten.vercel.app/discover/popular",
  },
  {
    id: 3,
    title: "Online Store",
    des: "A simple e-commerce(Dummy) web site for men, women and kids .",
    ts: " React | Redux | Nodejs | Express | MongoDB | JavaScript | CSS | Material UI",
    image: "/onlineStore.png",
    github: "https://github.com/ThOmas-Saji/online-store",
    live: "https://online-store-tau.vercel.app/",
  },
  {
    id: 4,
    title: "Mama Earth Clone",
    des: "A website for buying various skincare products for babies and females.",
    ts: "HTML | CSS | JavaScript",
    image: "/MamaE.png",
    github: "https://github.com/mehtaanand35/MamaEarthClone",
    live: "https://eloquent-allen-ba4ad9.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App 2.0",
    des: "A simple webpage for checking the current and future weather status.",
    ts: "React | contextapi | Bootstrap | HTML | CSS | TypeScript",
    image: "/WA.png",
    github: "https://github.com/ThOmas-Saji/Weather-App-2.0",
    live: "https://weather-app-2-0-snowy.vercel.app/",
  },
  {
    id: 6,
    title: "H & M Clone",
    des: "An e-commerce website known for its fast fashion for men,women, teenagers, and children.",
    ts: "HTML | CSS | JavaScript",
    image: "/HandM.png",
    github: "https://github.com/ThOmas-Saji/H-and-M-Clone-Project",
    live: "https://mystifying-hypatia-3f95a1.netlify.app/",
  },
];

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
            }}
            whileInView={{
              x: 0,
            }}
            className="image_container"
          >
            <img src={item?.image} />
          </motion.div>
          <motion.div className="text_container" style={{ y }}>
            <h2>{item?.title}</h2>
            <p>{item?.des}</p>
            <p>{item?.ts}</p>
            <div className="btn_wrapper">
              <a
                href={item?.github}
                className="btn_orange"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item?.live}
                className="btn_white"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
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
      {data?.map((item) => (
        <SingleProject item={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Portfolio;
