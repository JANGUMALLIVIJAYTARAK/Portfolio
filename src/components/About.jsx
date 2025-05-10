import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaPython, FaJs, FaCode, FaServer, FaCloud, FaCogs, FaFlask, FaDocker, FaAws, FaRobot, FaLeaf, FaCheckCircle, FaRocket, FaTools, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaTable, FaSchool, FaJava, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiSupabase, SiJenkins, SiVercel, SiTableau, SiPandas, SiReact, SiExpress, SiMongodb } from 'react-icons/si'
import { TbBolt } from 'react-icons/tb'
import { MdOutlineSmartToy } from 'react-icons/md'
import '../styles/About.css'

const education = [
  {
    icon: <FaGraduationCap color="#ffb300" size={24} />, // bright yellow
    school: 'Sasi Institute of Technology and Engineering',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2022–2026',
  },
  {
    icon: <FaSchool color="#ffb300" size={24} />, // bright yellow
    school: 'Vikas Junior College',
    degree: 'Intermediate',
    period: '2020–2022',
  },
]

// Unified skill cards (icon, name, color)
const skillCards = [
  { icon: <FaPython color="#3776ab" />, name: 'Python', color: '#3776ab' },
  { icon: <FaJava color="#f89820" />, name: 'Java', color: '#f89820' },
  { icon: <FaHtml5 color="#e44d26" />, name: 'HTML', color: '#e44d26' },
  { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS', color: '#1572b6' },
  { icon: <FaJs color="#f7df1e" />, name: 'JavaScript', color: '#f7df1e' },
  { icon: <FaBootstrap color="#7952b3" />, name: 'Bootstrap', color: '#7952b3' },
  { icon: <SiReact color="#61dafb" />, name: 'ReactJS', color: '#61dafb' },
  { icon: <FaNodeJs color="#339933" />, name: 'NodeJS', color: '#339933' },
  { icon: <SiExpress color="#b3b3b3" />, name: 'Express.js', color: '#b3b3b3' },
  { icon: <SiMongodb color="#47a248" />, name: 'MongoDB', color: '#47a248' },
  { icon: <FaServer color="#b3b3b3" />, name: 'SQL', color: '#b3b3b3' },
  { icon: <FaGitAlt color="#f34f29" />, name: 'Git', color: '#f34f29' },
  { icon: <FaGithub color="#fff" />, name: 'GitHub', color: '#fff' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.10,
      duration: 0.7,
      type: 'spring',
    },
  }),
}

const CircularProgress = ({ value, color }) => (
  <svg width="64" height="64" viewBox="0 0 64 64">
    <circle
      cx="32" cy="32" r="28"
      stroke="#222" strokeWidth="8" fill="none"
    />
    <circle
      cx="32" cy="32" r="28"
      stroke={color}
      strokeWidth="8"
      fill="none"
      strokehandlarray={2 * Math.PI * 28}
      strokeDashoffset={2 * Math.PI * 28 * (1 - value / 100)}
      strokeLinecap="round"
      style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.4,2,.6,1)' }}
    />
    <text x="32" y="38" textAnchor="middle" fontSize="1.2rem" fill="#fff" fontWeight="bold">{value}%</text>
  </svg>
)

const About = () => {
  return (
    <section id="about" className="about about-bg-video-section">
      <div className="about-bg-video-wrapper">
        <video className="about-bg-video" src="images/aboutbg.mp4" autoPlay loop muted playsInline />
        <div className="about-bg-overlay" />
      </div>
      <div className="container about-modern about-maxw-7xl" style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2 className="about-heading" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        {/* Education Full Width */}
        <motion.div className="about-education-full" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <h3>Education</h3>
          <ul>
            {education.map((edu, i) => (
              <li key={i} className="timeline-item">
                <span className="timeline-icon">{edu.icon}</span>
                <div className="timeline-content">
                  <span className="timeline-school">{edu.school}</span>
                  <span className="timeline-degree">{edu.degree}</span>
                  <span className="timeline-period">{edu.period}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Unified Skill Cards Grid */}
        <h3 className="skills-cards-heading">My Top Skills</h3>
        <div className="about-skills-cards-grid">
          {skillCards.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, boxShadow: `0 8px 32px 0 ${skill.color}44` }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skill-icon" style={{ color: skill.color, fontSize: '2.2rem', marginBottom: '1.2rem' }}>{skill.icon}</div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About