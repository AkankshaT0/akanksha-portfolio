import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCircle,
} from "react-icons/fa";
import "./About.css";

const education = [
  {
    id: 1,
    title: "Bachelor of Engineering",
    subtitle: "Information Technology",
    institute: "Datta Meghe College of Engineering",
    duration: "August 2024 - Present",
    location: "Airoli, Navi Mumbai",
    description:
      "Currently pursuing Bachelor of Engineering in Information Technology with consistent academic excellence.",
    result: "CGPA : 9.1",
    details: [
      "Semester 3 : 8.35 SGPA",
      "Semester 4 : 9.52 SGPA",
      "Semester 5 : 9.43 SGPA",
      "Present : Semester 7",
    ],
  },
  {
    id: 2,
    title: "Diploma (MSBTE)",
    subtitle: "Information Technology",
    institute: "Government Polytechnic Thane",
    duration: "June 2021 - June 2024",
    location: "Thane, Mumbai",
    description:
      "Completed Diploma in Information Technology with excellent academic performance.",
    result: "92.06 %",
  },
  {
    id: 3,
    title: "SSC Board",
    subtitle: "Secondary School Certificate",
    institute: "Surya Marathi High School",
    duration: "June 2011 - July 2021",
    location: "Kalyan, Thane",
    description:
      "Completed Secondary School Education with distinction.",
    result: "95.40 %",
  },
];

const interests = [
  "Full Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "UI / UX Design",
  "Product Development",
  "Hackathons",
  "Open Source Contribution",
  "Frontend Development",
  "Backend Development",
  "Data structures & Algorithms",
  "MERN"
];

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "AngularJS"
    ]
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Java",
      "Python",
      "PHP"
    ]
  },

  {
    title: "Database",
    items: [
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase"
    ]
  },

  {
    title: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Vercel"
    ]
  },

  {
    title: "AI & Emerging Tech",
    items: [
      "Machine Learning",
      "Artificial Intelligence",
      "OpenCV",
      "TensorFlow",
      "LLMs",
      "Prompt Engineering"
    ]
  },

  {
    title: "Others",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "REST APIs",
      "Responsive Design",
      "EmailJs"
    ]
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

function TimelineItem({ item, last }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="timeline-item position-relative ps-5 pb-5"
    >
      {!last && <div className="timeline-line"></div>}

      <div className="timeline-dot"></div>

      <div className="card bg-dark border-0 shadow-lg about-card">
        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-start flex-wrap">

            <div>
              <h3 className="text-white fw-bold mb-1">
                {item.title}
              </h3>

              <h6 className="text-violet mb-3">
                {item.subtitle}
              </h6>
            </div>

            <span className="badge bg-violet px-3 py-2 fs-6">
              {item.result}
            </span>

          </div>

          <h5 className="education-institute mt-3">
            {item.institute}
          </h5>

          <div className="d-flex flex-wrap gap-4 education-meta my-3">

            <div className="d-flex align-items-center gap-2">
              <FaCalendarAlt />
              {item.duration}
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaMapMarkerAlt />
              {item.location}
            </div>

          </div>

          <p className="education-description">
            {item.description}
          </p>

          {item.details && (
            <div className="row g-3 mt-2">
              {item.details.map((detail) => (
                <div key={detail} className="col-md-6">
                  <div className="detail-box">
                    {detail}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="about-section py-5">

      <div className="container">

        <motion.div
          {...fadeUp}
          className="text-center mb-5"
        >

          <h2 className="display-5 fw-bold text-white">
            About <span className="text-violet">Me</span>
          </h2>

          <p className="lead text-secondary mx-auto about-intro">
            Passionate Information Technology student with a strong
            foundation in Full Stack Development, Artificial Intelligence,
            and Java. I enjoy creating scalable applications that solve
            real-world problems while continuously learning modern
            technologies.
          </p>

        </motion.div>

        <div className="row g-5">

          {/* Left */}

          <div className="col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <h2 className="text-white fw-bold mb-4">
                Who am I?
              </h2>

              <p className="text-light">
                Hello! I'm
                <span className="text-violet fw-bold">
                  {" "}Akanksha Tambe
                </span>,
                a final-year Information Technology student passionate
                about building modern web applications and AI-powered
                solutions.
              </p>

              <p className="text-light">
                I specialize in React, Java, Node.js,
                JavaScript, MongoDB, Firebase and modern frontend and Backend
                technologies. My passion lies in building responsive,
                scalable software with intuitive user experiences.
              </p>

              <p className="text-light mb-4">
                I constantly explore new technologies,
                participate in hackathons and work on projects
                that strengthen my problem-solving and
                software engineering skills.
              </p>

              {/* Interests */}

              <div className="card bg-dark border-0 shadow mb-4">

                <div className="card-body">

                  <div className="d-flex align-items-center mb-4">

                    <FaLaptopCode
                      className="text-violet me-3"
                      size={35}
                    />

                    <h4 className="text-white mb-0">
                      Interests
                    </h4>

                  </div>

                  <div className="row g-3">

                    {interests.map((item) => (

                      <div
                        key={item}
                        className="col-6"
                      >

                        <div className="interest-box">
                          {item}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* Technologies */}

              {/* Technical Skills */}

<div className="card bg-dark border-0 shadow ">

  <div className="card-body text-light">

    <div className="d-flex align-items-center mb-4 text-light">

      <FaCode
        className="text-violet me-3"
        size={35}
      />

      <h4 className="text-white mb-0">
        Technical Skills
      </h4>

    </div>

    {skills.map((category) => (

      <div
        key={category.title}
        className="mb-4"
      >

        <h6 className="text-violet fw-bold mb-3">
          {category.title}
        </h6>

        <div className="d-flex flex-wrap gap-2">

          {category.items.map((item) => (

            <span
              key={item}
              className="skill-badge"
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    ))}

  </div>

</div>

            </motion.div>

          </div>

          {/* Right */}

          <div className="col-lg-7 text-light">

            {education.map((item, index) => (

              <TimelineItem
                key={item.id}
                item={item}
                last={index === education.length - 1}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;