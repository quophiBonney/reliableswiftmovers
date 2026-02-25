import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
