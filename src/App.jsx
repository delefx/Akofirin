import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Akofirin2026 from "./pages/Akofirin2026";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 

        <Route path="/history" element={<History />} />
        <Route path="/2026" element={<Akofirin2026 />} />

     </Routes>
    </>
  );
}
