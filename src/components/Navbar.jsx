import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed w-full z-50 flex justify-center mt-4 px-4">
      <nav
        className={`w-full max-w-7xl rounded-2xl transition-all duration-500
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-xl border border-white/20"
            : "bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-8 h-16">

          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-wide">
            Move<span className="text-blue-600">Pro</span>
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition duration-300
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Quote
            </button>
          </div>

          {/* Mobile Icon */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-8 pb-6 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            ))}

            <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-4">
              Get Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}