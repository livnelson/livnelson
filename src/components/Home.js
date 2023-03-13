import React from 'react'
import { HashLink } from 'react-router-hash-link'

import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import SocialLinks from '../components/SocialLinks'
import Contact from './Contact'
import '../styles/Home.css'

function Home() {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -80
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <div>
      <div className='home-section' id='home'>
        <div className='welcome-image'>
          {/* <img className='avatar' src='https://liv-creative.com/wp-content/uploads/2023/02/liv.png' alt='liv' /> */}
        </div>
        <div className='welcome'>
          <p className='intro'> Hello, my name is</p>
          <h1 className='intro-title'>Liv Nelson</h1>
          <p className='intro-desc'>I'm a full-stack software engineer  with a knack for combining technical skills and creativity.</p>
          <button className='btn'><HashLink className='btn-link' smooth to='/#contact' scroll={el => scrollWithOffset(el)}>Get in Touch</HashLink></button>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
      <Contact />
    </div>
  )
}

export default Home