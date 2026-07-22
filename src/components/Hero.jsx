
// Hero.jsx
// Replace "../assets/images/profile.png" with your image if needed.

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import profile from "../assets/images/profile.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-6"
            initial={{opacity:0,x:-60}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.8}}
          >
            <span className="badge hero-badge px-4 py-3 mb-4 fs-6 fw-semibold hero-badge-glow">
              <span className="status-dot"></span>
              Available for Internship (With PPO) / Job Opportunities
            </span>

            <h1 className="display-2 fw-bold text-white">
              Akanksha <br />
              <span className="hero-gradient">Tambe</span>
            </h1>

            <div className="fs-2 fw-semibold my-4 hero-type">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",2000,
                  "React Developer",2000,
                  "Java Enthusiast",2000,
                  "AI Enthusiast",2000,
                  "Frontend Developer",2000
                ]}
                repeat={Infinity}
              />
            </div>

            <p className="lead text-light-emphasis">
              Passionate Information Technology student specializing in Full
              Stack Development, Artificial Intelligence and modern web
              applications. I enjoy building scalable software using React,
              Java, Node.js and Machine Learning.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="/resume.pdf" download className="btn hero-btn-primary">
                <FaDownload className="me-2"/>Download Resume
              </a>

              <a href="#projects" className="btn hero-btn-outline">
                View Projects <FaArrowRight className="ms-2"/>
              </a>
            </div>

            <div className="d-flex gap-3 mt-5">
              <a className="hero-social" href="https://github.com/AkankshaT0" target="_blank" rel="noreferrer"><FaGithub/></a>
              <a className="hero-social" href="https://linkedin.com/in/akanksha-tambe-40a4bb264/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
              <a className="hero-social" href="mailto:akankshatambe712@gmail.com"><FaEnvelope/></a>
            </div>

            <div className="row text-center mt-5 g-3">
              <div className="col-4"><div className="stat-card"><h3>10+</h3><p>Projects</p></div></div>
              <div className="col-4"><div className="stat-card"><h3>9.1</h3><p>Current CGPA</p></div></div>
              <div className="col-4"><div className="stat-card"><h3>Top 50 Finalist</h3><p>Hackathon</p></div></div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 text-center"
            initial={{opacity:0,x:60}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.8}}
          >
            <div className="hero-image-wrapper">
              <img src={profile} alt="Akanksha Tambe" className="img-fluid hero-image"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
