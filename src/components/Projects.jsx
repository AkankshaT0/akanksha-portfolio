import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <motion.div
          initial={{opacity:0,y:-40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.7}}
          viewport={{once:true}}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white">
            My <span className="text-violet">Projects</span>
          </h2>
          <p className="lead text-secondary mx-auto projects-subtitle">
            A collection of projects showcasing my skills in Full Stack Development,
            Artificial Intelligence, Machine Learning and modern web technologies.
          </p>
        </motion.div>

        <div className="row g-4">
          {projects.map(project=>(
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
