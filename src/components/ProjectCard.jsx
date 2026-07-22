import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({project}){
  return(
    <motion.div
      whileHover={{y:-10}}
      transition={{duration:.3}}
      className="card project-card h-100 border-0"
    >
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image"/>
        <span className="project-category badge rounded-pill">
          {project.category}
        </span>
      </div>

      <div className="card-body d-flex flex-column">
        <h3 className="card-title text-white fw-bold mb-3">
          {project.title}
        </h3>

        <p className="card-text text-secondary flex-grow-1">
          {project.description}
        </p>

        <div className="d-flex flex-wrap gap-2 my-3">
          {project.technologies.map((tech)=>(
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2 mt-auto">
          {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
             className="btn btn-outline-light flex-fill">
            <FaGithub className="me-2"/>GitHub
          </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
               className="btn btn-violet flex-fill">
              <FaExternalLinkAlt className="me-2"/>Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
