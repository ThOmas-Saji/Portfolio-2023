import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import mixpanel from "mixpanel-browser";

mixpanel.init(import.meta.env.VITE_PROJECT_KEY, { track_pageview: true });

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <div id="Projects">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
      <Cursor />
    </div>
  );
};

export default App;
