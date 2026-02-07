import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", to: "/" },
  { name: "About Akofirin", to: "/about" },
  { name: "History", to: "/history" },
  { name: "Akofirin 2026", to: "/2026" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.jpg"
            alt="Akofirin Festival Logo"
            className="w-24 h-24 object-contain"
          />
          <span className="font-semibold text-lg text-white">
            Akofirin Cultural Festival
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition hover:text-[#f5d58c] ${
                    isActive ? "text-[#f5d58c]" : "text-white"
                  }`
                }
              >
                {l.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-white/15"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-white/15 text-[#f5d58c]"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      {l.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Navbar;
