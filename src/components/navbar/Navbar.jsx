import Sidebar from "./Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          PORTFOLIO
        </motion.span>
        <div className="social">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            href="#"
          >
            <img src="./facebook.png" alt="facebook" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            href="#"
          >
            <img src="./instagram.png" alt="instagram" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            href="#"
          >
            <img src="./youtube.png" alt="youtube" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.8 }}
            href="#"
          >
            <img src="./dribbble.png" alt="dribbble" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
