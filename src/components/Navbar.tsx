import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import mainLogo from "@/assets/images/logo.png";

const navItems = [
  "Home",
  "Microbes",
  "Minerals",
  "Products",
  "Services",
  "Resources",
  "About",
  "Careers",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [open]);

  return (
    <>
      {/* LOGO FIXED */}
      <img
        src={mainLogo}
        alt="Logo"
        className="fixed top-5 left-6 h-12 w-auto z-[99999] select-none"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[99999] px-4 lg:px-6 overflow-x-hidden">

        {/* MOBILE MENU BUTTON */}
        <div className="fixed top-7 right-10 lg:hidden z-[99999]">
          <button
            onClick={() => setOpen(!open)}
            className={`w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md border border-white/20 transition
            ${isScrolled ? "bg-white text-green-700" : "bg-black/40 text-white"}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:flex items-center justify-center mt-6 ml-8">
          <div className="flex items-center gap-10 px-8 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const path =
                  item === "Home"
                    ? "/"
                    : item === "Microbes"
                    ? "/microbes"
                    : `#${item.toLowerCase()}`;

                return (
                  <li key={item}>
                    <NavLink
                      to={path}
                      end={item === "Home" || item === "Microbes"}
                      className={({ isActive }) =>
                        `text-sm font-medium transition relative
                        ${isScrolled ? "text-green-600" : "text-white"}
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300
                        ${
                          isActive
                            ? isScrolled
                              ? "after:w-full after:bg-green-600"
                              : "after:w-full after:bg-white"
                            : "after:w-0"
                        }`
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed top-20 left-4 right-4 max-w-[92vw] rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg p-6 lg:hidden z-[99999]">

            <ul className="flex flex-col gap-5">
              {navItems.map((item) => {
                const path =
                  item === "Home"
                    ? "/"
                    : item === "Microbes"
                    ? "/microbes"
                    : `#${item.toLowerCase()}`;

                return (
                  <li key={item}>
                    <NavLink
                      to={path}
                      end={item === "Home" || item === "Microbes"}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-white"
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;