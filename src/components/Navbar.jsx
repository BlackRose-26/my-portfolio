import { useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaAddressBook } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black backdrop-blur-lg border-white/10 shadow-lg">
        <div className="max-w-5x1 ax-auto px-4">
            <div className="flex justify-between items-cebter h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    Lester<span className="text-blue-500">.Portfolio</span>{" "}
                </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition flex items-center gap-2">
              <FaHome size={18} />
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition flex items-center gap-2">
              <FaUser size={18} />
              About
            </a>
            <a href="#project" className="text-gray-300 hover:text-white transition flex items-center gap-2">
              <FaProjectDiagram size={18} />
              Project
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition flex items-center gap-2">
              <FaAddressBook size={18} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
