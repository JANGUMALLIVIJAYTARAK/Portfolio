import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>
          Copyright &copy; | All Rights Reserved |
          <span className="footer-name"> Vijay Tarak Jangumalli </span>
          <span className="footer-heart">&#10084;</span>
          <span className="footer-year"> {year}</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer 