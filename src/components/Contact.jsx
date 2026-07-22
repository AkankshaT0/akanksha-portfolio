
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane , FaGithub, FaLinkedin} from "react-icons/fa";
import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";


export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <motion.div
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white">
            Contact <span className="text-violet">Me</span>
          </h2>
          <p className="lead text-secondary mx-auto contact-subtitle">
            Have a Job opportunity, project, internship opportunity or want to collaborate?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="row g-5 align-items-stretch">
          <motion.div
            className="col-lg-5"
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >
            <div className="contact-card h-100">
              <h3 className="text-white mb-4">Let's Connect</h3>

              <div className="info-item">
                <div className="icon-box"><FaEnvelope/></div>
                <div>
                  <h5>Email</h5>
                  <p>akankshatambe712@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><FaGithub/></div>
                <div>
                  <h5>GitHub</h5>
                  <p>github.com/Akankshaa7</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><FaLinkedin/></div>
                <div>
                  <h5>LinkedIn</h5>
                  
                  <p>linkedin.com/in/akankshatambe</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><FaMapMarkerAlt/></div>
                <div>
                  <h5>Location</h5>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <a
                href="mailto:akankshatambe712@gmail.com"
                className="btn btn-violet mt-4"
              >
                <FaEnvelope className="me-2"/>
                Email Me Directly
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-7"
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >
            <form className="contact-card" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input className="form-control custom-input" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                  <input className="form-control custom-input" type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <input className="form-control custom-input" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <textarea rows="6" className="form-control custom-input" name="message" placeholder="Message" value={formData.message} onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <button className="btn btn-violet w-100">
                    <FaPaperPlane className="me-2"/>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
