import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./sidebar.scss";

const linksData = ["Home", "About", "Expertise", "Projects", "Contact"];

// framer animations
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const listVariants = {
  open: {
    staggerChildren: 0.1,
  },
  closed: {
    staggerChildren: 0.05,
    staggerDirection: -1,
  },
};
const listChildVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      damping: 10,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 10,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(false)
  }, []);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div variants={variants} className="bg">
        <motion.div variants={variants} className="links">
          <motion.div variants={listVariants} className="links_child">
            {linksData?.map((link, key) => (
              <motion.a
                onClick={() => {
                  setTimeout(() => setOpen(false), 500);
                }}
                href={`#${link}`}
                key={key}
                variants={listChildVariants}
                whileHover={{
                  scale: 1.05,
                  borderBottom: "1px solid black",
                  width: "fit-content",
                }}
                whileTap={{
                  scale: 0.95,
                  borderBottom: "none",
                }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <button onClick={() => setOpen(!open)}>
        <svg width={23} height={23} viewBox="0 0 22 16">
          <motion.path
            strokeWidth={3}
            stroke={"black"}
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 3.5 L 20 3.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          ></motion.path>
          <motion.path
            strokeWidth={3}
            stroke={"black"}
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 10 L 20 10", opacity: 1 },
              open: { opacity: 0 },
            }}
          ></motion.path>
          <motion.path
            strokeWidth={3}
            stroke={"black"}
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.5 L 20 16.5" },
              open: { d: "M 3 2.5 L 17 16.5" },
            }}
          ></motion.path>
        </svg>
      </button>
    </motion.div>
  );
};

export default Sidebar;
