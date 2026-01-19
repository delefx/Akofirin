import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Akofirin Festival Logo"
            className="w-24 h-24 object-contain"
          />
          <span className="font-semibold text-lg text-white">
            Akofirin Cultural Festival
          </span>
        </div>


<ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Akofirin</Link></li>
  <li><Link to="/history">History</Link></li>
  <li><Link to="/2025">Akofirin 2026</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>


      </nav>
    </header>
  );
}

export default Navbar;
