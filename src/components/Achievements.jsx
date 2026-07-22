import { motion } from "framer-motion";
import certificates from "../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Achievements.css";

export default function Certificates() {
  return (
    <section id="certificates" className="achievements-section py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white">
            My <span className="text-violet">Certificates</span>
          </h2>

          <p className="lead text-secondary mx-auto achievements-subtitle">
            Certifications that demonstrate my continuous learning and technical
            expertise across software development, AI, and programming.
          </p>
        </motion.div>

        <div className="row g-4">
          {certificates.map((item, index) => (
            <motion.div
              key={item.id}
              className="col-lg-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card achievement-card border-0 h-100">
                <div className="card-body d-flex flex-column">

                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h4 className="text-white fw-bold mb-1">
                        {item.title}
                      </h4>

                      <h6 className="text-violet mb-0">
                        {item.issuer}
                      </h6>
                    </div>

                    <span className="year-badge">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-secondary">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="badge bg-secondary me-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-violet"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      View Certificate
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}