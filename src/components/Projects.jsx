import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Projects.css'

const MAX_DESC_LENGTH = 220;

const highlightTech = (desc, techs) => {
  // Sort techs by length descending to avoid partial matches
  const sortedTechs = [...techs].sort((a, b) => b.length - a.length);
  let replaced = desc;
  sortedTechs.forEach(tech => {
    // Regex: match tech as a whole word, case-insensitive
    const regex = new RegExp(`\\b${tech.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    replaced = replaced.replace(regex, match => `<span class='desc-tech'>${match}</span>`);
  });
  return replaced;
};

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false));

  const projects = [
    {
      title: 'Wanderlust',
      description: 'Wanderlust (https://wanderlust-v9l0.onrender.com/listings) is a rental booking platform for travel enthusiasts to discover and book unique travel accommodations. It features an interactive map that makes it easy to find listings based on location, allowing users to explore destinations, view property details, and connect with hosts seamlessly.',
      image: 'images/image.png',
      technologies: ['EJS', 'Express.js', 'Node.js', 'MongoDB',],
      github: 'https://github.com/JANGUMALLIVIJAYTARAK/Wanderlust',
      live: 'https://wanderlust-v9l0.onrender.com/listings'
    },
    {
      title: 'Task Timer App',
      description: 'A web application built with the MERN Stack that helps users allocate time for tasks and sends pop-up alerts when they exceed the set limit. It’s a simple, browser-based tool designed to keep users organized, avoid time wastage, and boost productivity.',
      image: 'images/timetask.png',
      technologies: [ 'ReactJS', 'Node.js', 'Express.js','MongoDB'],
      github: 'https://github.com/JANGUMALLIVIJAYTARAK/Time-Task-Managment',
      live: 'https://tasktimer-sigma.vercel.app/'
    },

  ]

  const handleReadMore = idx => {
    setExpanded(prev => prev.map((val, i) => (i === idx ? !val : val)))
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {projects.map((project, index) => {
            const isLong = project.description.length > MAX_DESC_LENGTH;
            const showFull = expanded[index];
            const desc = isLong && !showFull
              ? project.description.slice(0, MAX_DESC_LENGTH) + '...'
              : project.description;
            const isReverse = index % 2 === 1;
            return (
              <motion.div
                key={index}
                className={`project-card${isReverse ? ' reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: isReverse ? 'row-reverse' : 'row', alignItems: 'center', minHeight: 320 }}
              >
                <motion.div
                  className="project-window"
                  whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(229,9,20,0.18)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="project-image"
                    whileHover="zoom"
                    style={{ overflow: 'hidden' }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      variants={{
                        zoom: { scale: 1.06 },
                        initial: { scale: 1 }
                      }}
                      initial="initial"
                      whileHover="zoom"
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </motion.div>
                </motion.div>
                <div className="project-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                  <h3>{project.title}</h3>
                  <p style={{ flex: 1 }}>
                    <span dangerouslySetInnerHTML={{
                      __html: highlightTech(desc, project.technologies)
                    }} />
                    {isLong && (
                      <span
                        className="read-more"
                        style={{ color: '#e50914', cursor: 'pointer', fontWeight: 600, marginLeft: 6 }}
                        onClick={() => handleReadMore(index)}
                      >
                        {showFull ? ' Show Less' : ' Read More'}
                      </span>
                    )}
                  </p>
                  <motion.div
                    className="project-tech"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                      hidden: {}
                    }}
                  >
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="tech-tag"
                        variants={{
                          visible: { opacity: 1, y: 0 },
                          hidden: { opacity: 0, y: 10 }
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 