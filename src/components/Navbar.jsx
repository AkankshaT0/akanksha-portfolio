
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (!section) return;
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(link.name);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg container">
        

        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 py-3 py-lg-0">
            {navLinks.map(link => (
              <li className="nav-item" key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link custom-link ${active===link.name?"active-pill":""}`}
                  onClick={()=>{
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
