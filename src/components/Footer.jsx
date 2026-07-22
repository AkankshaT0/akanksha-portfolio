
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  const year=new Date().getFullYear();
  const scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"});
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-social">
          <a href="https://github.com/AkankshaT0" target="_blank" rel="noreferrer" className="social-btn"><FaGithub/></a>
          <a href="https://linkedin.com/in/akanksha-tambe-40a4bb264/" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin/></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-btn"><FaInstagram/></a>
          <a
href="https://leetcode.com/Akankshaa7/"
  target="_blank"
  rel="noreferrer"
  className="social-btn"
  title="LeetCode"
>
  <SiLeetcode />
</a>
        </div>

       

        <div className="text-center mt-4">
          <button onClick={scrollToTop} className="btn btn-violet">
            <FaArrowUp className="me-2"/>Back to Top
          </button>
        </div>

        <hr className="footer-divider"/>

        <div className="text-center">
          <p className="mb-1 text-light">© {year} Akanksha Tambe. All Rights Reserved.</p>
          <small className="text-secondary">Built with React • JavaScript • EmailJs • Bootstrap • Framer Motion</small>
        </div>
      </div>
    </footer>
  );
}
