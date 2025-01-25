import React, { useState } from "react";
import "./HomePage.css";
import TypingEffect from "./TypingEffect";
import emailjs from "emailjs-com";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cqenfdk",
        "template_8lzgsae",
        e.target,
        "8vALFIyST5QuvqPO7"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const rotatingSpeed = 0.01;

  // UseFrame to animate the movement of 3D objects
  const animateMovement = (ref) => {
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.x += rotatingSpeed;
        ref.current.rotation.y += rotatingSpeed;
      }
    });
  };

  const skills = [
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826610/c_jirzmv.png",
      alt: "C",
      name: "C",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826623/java_wgvyyo.png",
      alt: "Java",
      name: "Java",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826625/python_psdfhw.png",
      alt: "Python",
      name: "Python",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826620/html_iv688z.png",
      alt: "HTML",
      name: "HTML",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826613/css_hpzeb7.png",
      alt: "CSS",
      name: "CSS",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826612/bootstrap_ri1n8w.png",
      alt: "BootStrap",
      name: "BootStrap",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826632/tailwind_r62ddy.png",
      alt: "TailWind",
      name: "TailWind CSS",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826625/react_v6lte7.svg",
      alt: "React.js",
      name: "React.js",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826621/JS_qwudsd.png",
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826623/nodejs_igavr0.png",
      alt: "Node.js",
      name: "Node.js",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826614/expressjs_npmsok.svg",
      alt: "Express.js",
      name: "Express.js",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826629/rest_mjtteh.png",
      alt: "REST",
      name: "RESTful API",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826620/ejs_krselt.png",
      alt: "EJS",
      name: "EJS",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826626/postgresql_yut39f.png",
      alt: "PostgreSQL",
      name: "PostgreSQL",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826622/mysql_jd7ggz.png",
      alt: "MySQL",
      name: "SQL",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826622/mongodb_ln5qu3.png",
      alt: "MongoDB",
      name: "MongoDB",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826617/git_ian2xg.png",
      alt: "Git",
      name: "Git",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826617/github_ebmelw.png",
      alt: "GitHub",
      name: "GitHub",
    },

    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826638/vscode_xfvvcw.png",
      alt: "VS Code",
      name: "VS Code",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826614/eclipse_obce1w.png",
      alt: "Eclipse",
      name: "Eclipse",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826625/pycharm_u54g0k.png",
      alt: "PyCharm",
      name: "PyCharm",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826621/intellij_k1p69g.png",
      alt: "IntelliJ",
      name: "IntelliJ",
    },

    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826617/codeblocks_ifed3o.png",
      alt: "Code Blocks",
      name: "Code Blocks",
    },
    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826414/apache_twgeqm.png",
      alt: "Apache",
      name: "Apache Tomcat",
    },

    {
      src: "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826614/canva_fpwvby.png",
      alt: "Canva",
      name: "Canva",
    },
  ];

  const SkillsLoop = () => (
    <div className="skills" style={{ padding: "40px 20px" }}>
      <h2 id="secHead">Skills</h2>
      <p id="secPara">
        Here are the cutting-edge technologies and tools that fuel my passion
        for building innovative solutions:
      </p>
      <div className="scroll-container">
        <div className="scroll-content">
          {skills.map((tech, index) => (
            <div key={index} className="card">
              <img src={tech.src} alt={tech.alt} />
              <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                {tech.name}
              </h3>
            </div>
          ))}
          {skills.map((tech, index) => (
            <div key={`duplicate-${index}`} className="card">
              <img src={tech.src} alt={tech.alt} />
              <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div className="home">
      <header>
        <div className="header-container">
          <div className="logo">LL</div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="intro" className="intro">
        <div className="intro-content">
          <div className="intro-text">
            <h1 id="hello">Hello,</h1>
            <h1 id="name">
              {" "}
              <span id="im">I ' m</span> &nbsp; <b>Lungsom</b>
            </h1>

            <TypingEffect />
            <p id="desc">Code Dreams to Reality!</p>
            <div className="social-links">
              <a
                href="https://github.com/LungsomLamnio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lungsom-lamnio-339914282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/lungsom.lamnio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/lungsom_lamnio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100036725803105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="intro-elements">
            <img
              src="https://res.cloudinary.com/dgmftp80m/image/upload/v1737826646/spaceboy_bvflhq.png"
              alt="photo"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="skills" style={{ padding: "40px 20px" }}>
        <SkillsLoop />
      </section>

      <section
        id="experience"
        className="experience"
        style={{
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 id="secHead">Experience</h2>
        <p id="secPara">
          Here are some of the impactful roles I’ve had the privilege to lead
          and contribute to:
        </p>{" "}
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Role 1 */}
          <div
            style={{
              ...cardStyle,
              width: "60%",
              maxWidth: "500px",
              padding: "20px",
              boxSizing: "border-box",
            }}
            className="card"
          >
            {/* Company Logo */}
            <div style={{ marginBottom: "15px", textAlign: "center" }}>
              <img
                src="https://res.cloudinary.com/dgmftp80m/image/upload/v1737826616/gdgBanner_qrxjnr.png" // Replace this with the correct path to your logo
                alt="Google Developers Group"
                style={{
                  height: "100px", // Increased height for the logo
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Card Content */}
            <h3>Google Developers Group on Campus - Web Dev Lead</h3>
            <p>Oct 2024 - Present</p>
            <p
              style={{
                fontSize: "14px",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              As a <b>Web Development Lead</b> of the{" "}
              <b>Google Developers Group on Campus</b>, I actively guide and
              mentor students on various web technologies, including modern
              frameworks like React.js, backend technologies, and API
              development. I have conducted workshops and interactive sessions
              to inspire peers to build innovative projects and explore
              real-world tech solutions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="projects"
        style={{
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginBottom: "10px" }} id="secHead">
          Projects
        </h2>
        <p
          style={{
            marginBottom: "30px",
            fontSize: "16px",
            color: "#555",
            textAlign: "center",
            maxWidth: "600px",
          }}
          id="secPara"
        >
          Explore some of my recent projects showcasing my skills in software
          development, problem-solving, and user experience design.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Shared card styling */}
          {[
            {
              title: "Intelligent Traffic Management System",
              image:
                "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826627/traffic_gqipdq.jpg",
              description:
                "The Traffic Light Management System is designed to manage and simulate traffic light operations based on real-time traffic data. It adjusts traffic light cycles dynamically using APIs like Google Roads and Geocoding, displaying results through an interactive User Interface.",
              link: "https://github.com/LungsomLamnio/SmartIndiaHackathon",
            },
            {
              title: "Online Booking Platform for Hotels and Stays",
              image:
                "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826617/hotel_xzgqfi.jpg",
              description:
                "Effortlessly discover and book your perfect stay. This platform offers a seamless experience for exploring a wide range of hotels, complete with real-time pricing, availability, and personalized filters. Designed with user convenience in mind, it ensures secure payments and a smooth booking journey from start to finish.",
              link: "https://github.com/LungsomLamnio/Wanderlust",
            },
            {
              title: "Digital Platform to Support Local Artisans",
              image:
                "https://res.cloudinary.com/dgmftp80m/image/upload/v1737826675/artisan_ti6ept.png", // Replace with the path to the appropriate image
              description:
                "A vibrant online marketplace connecting skilled artisans with a global audience. This platform celebrates creativity and craftsmanship, empowering local talent to share their unique handmade creations. By fostering fair trade and preserving cultural heritage.",
              link: "https://github.com/LungsomLamnio/ByteHacks",
            },
          ].map((project, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "25%",
                maxWidth: "500px",
                padding: "20px",
                boxSizing: "border-box",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ marginBottom: "15px", width: "100%" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "justify",
                  marginBottom: "10px",
                  minHeight: "80px",
                }}
              >
                {project.description}
              </p>
              <br />
              <div style={{ marginTop: "auto", width: "100%" }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    See in Detail
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div style={{ marginTop: "30px" }}>
          <a
            href="https://github.com/LungsomLamnio?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View More Projects
            </button>
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 id="secHead">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </section>

      <footer>
        <p>© 2025 LL. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
