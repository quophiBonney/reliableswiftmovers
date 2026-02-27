import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`w-full z-50 flex justify-center transition-all duration-300 border-b border-red-200 ${
        scrolled ? "fixed top-0" : "relative"
      }`}
    >
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white backdrop-blur-md"
        }`}
      >
        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center h-20 relative overflow-hidden">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-24 w-full px-8 md:px-10 lg:px-24 z-10">
            <NavLink to="/">
              <img
                src={logo}
                alt="Reliable Swift Movers logo"
                className="w-56 mt-5 object-cover"
              />
            </NavLink>

            <div className="flex items-center gap-10">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-lg font-bold uppercase transition duration-300 group ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-700 hover:text-red-600"
                    }`
                  }
                >
                  {link.name}

                  {/* animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* ================= SKEW CTA AREA ================= */}
          <div className="absolute right-0 h-full w-[420px] flex items-center justify-center text-white">
            {/* Skewed Background ONLY */}
            <div className="absolute inset-0 bg-red-600 transform -skew-x-12 origin-left w-[150%]"></div>

            {/* Content (NOT skewed) */}
            <div className="relative text-center">
              <p className="text-sm uppercase tracking-wider">Call Us On</p>
              <p className="text-3xl font-extrabold">1-587-500-0309</p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="bg-white flex items-center justify-between px-4 h-20 md:hidden">
          <NavLink to="/">
            <img
              src={logo}
              alt="Reliable Swift Movers logo"
              className="w-32 mt-5 object-cover"
            />
          </NavLink>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <div className="hover:cursor-pointer bg-red-500 p-2 rounded">
                <X size={25} color={"white"} />
              </div>
            ) : (
              <div className="hover:cursor-pointer bg-red-500 p-2 rounded">
                <Menu size={25} color={"white"} />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`md:hidden fixed right-0 top-0 h-full w-3/5 max-w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-blue-100">
            <h2 className="text-xl font-bold text-red-600">RSM</h2>

            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-blue-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
