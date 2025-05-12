import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTools, FaReact, FaGithub, FaExternalLinkAlt } from 'react-icons/fa' // Added FaExternalLinkAlt
import '../styles/Experience.css'

const experiences = [
  {
    role: 'National Level Hackathon 2025 - 2nd Prize Winner',
    company: 'Library Management System @ SRKR College with Brain O Vision',
    period: '2025',
    icon: <FaTools />,
    details: [
      'Developed a system using DevOps tools for efficient book cataloging, user management, and automated tracking.',
      'Technologies: Jenkins, Git, GitHub',
    ],
    github: 'https://github.com/JANGUMALLIVIJAYTARAK/Library-Management-System-Hackathon',
  },
  {
    role: 'National Level Hackathon 2024 - Merit Certificate',
    company: 'Time Task Management System @ SRKR College with Brain O Vision',
    period: '2024',
    icon: <FaReact />,
    details: [
      'Built a task management system with the MERN stack, optimizing task scheduling and progress tracking.',
      'Technologies: MongoDB, Express.js, ReactJS, NodeJS, JavaScript, CSS',
    ],
    github: 'https://github.com/JANGUMALLIVIJAYTARAK/Time-Task-Managment',
    liveDemo: 'https://tasktimer-sigma.vercel.app/',
  },
]

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: 'spring',
    },
  }),
}

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container experience-maxw-7xl">
      <motion.h2 
        className="experience-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        viewport={{ once: true }}
      >
        Hackathons
      </motion.h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="experience-card"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="experience-header">
              <span className="experience-title-icon">{exp.icon}</span>
              <h3>{exp.role}</h3>
              <span className="company">{exp.company}</span>
            </div>
            <span className="period-badge">{exp.period}</span>
            <ul className="experience-details">
              {exp.details.map((detail, i) => (
                <li key={i}>
                  <FaCheck className="check-icon" />
                  {detail}
                </li>
              ))}
            </ul>
            {(exp.github || exp.liveDemo) && (
              <div className="experience-links">
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github"
                  >
                    <FaGithub className="btn-icon" />
                    GitHub
                  </a>
                )}
                {exp.liveDemo && (
                  <a
                    href={exp.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-live-demo"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience