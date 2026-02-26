import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to="/"
              className="text-2xl font-extrabold tracking-wide uppercase"
            >
              Reliable Swift <span className="text-red-600">Movers</span>
            </NavLink>

            <div className="flex items-center gap-10">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-lg font-bold uppercase transition duration-300 group ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  {link.name}

                  {/* animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
              <p className="text-sm uppercase tracking-wider">
                Call Us On
              </p>
              <p className="text-3xl font-extrabold">
                1-587-500-0309
              </p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="bg-red-600 flex items-center justify-between px-8 h-20 md:hidden">
          <h1 className="text-xl font-bold tracking-wide text-white">
            Reliable Swift <span className="text-blue-600">Movers</span>
          </h1>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X size={26} color="white" />
            ) : (
              <Menu size={26} color="white" />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`md:hidden fixed right-0 top-0 h-full w-3/5 max-w-80 bg-blue-50 shadow-2xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-blue-100">
            <h2 className="text-xl font-bold text-blue-600">
              Reliable Swift Movers
            </h2>

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