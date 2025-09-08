
import { useState } from "react";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

function App() {
  // state variables
  const [activeNav, setActiveNav] = useState("home");
  
  return (
    <>
      <Menu activeNav={activeNav} setActiveNav={setActiveNav}/>
      {activeNav === "home" && <HomePage />}
      {activeNav === "about" && <AboutMe />}
      {activeNav === "contact" && <Contact />}
    </>
  );
}

export default App;
