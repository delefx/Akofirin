import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        
        {/* Festival Info */}
        <div>
          <h3 className="text-xl font-semibold">Akofirin Cultural Festival</h3>
          <p className="mt-3 text-sm text-white/85 leading-relaxed max-w-sm">
            A celebration of heritage, unity, and cultural identity of the Oke-Offin
            people — promoting tradition and cultural tourism in Kogi State.
          </p>

          <p className="mt-4 text-sm text-white/70">
            Oke-Offin, Bunu District<br />
            Kogi State, Nigeria
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Akofirin</Link></li>
            <li><Link to="/history" className="hover:underline">History</Link></li>
            <li><Link to="/2026" className="hover:underline">Akofirin 2026</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Closing Message */}
        <div>
          <h4 className="text-lg font-semibold">We look forward to welcoming you</h4>
          <p className="mt-3 text-sm text-white/85 leading-relaxed max-w-sm">
            Akofirin Cultural Festival is more than an event — it is a shared cultural
            experience. We look forward to having you join us for the 2026 edition.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} Akofirin Cultural Festival. All rights reserved.
          </p>
          <p>
            Designed for heritage & community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
