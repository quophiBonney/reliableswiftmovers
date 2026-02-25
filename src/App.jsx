import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomeHero from "./components/HomeHero";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="px-4 md:px-10">
        <Home />
      </div>
    </>
  );
}

export default App;
