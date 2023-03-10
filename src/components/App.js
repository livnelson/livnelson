import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import SocialLinks from './SocialLinks'
import Contact from './Contact'
import '../styles/App.css'

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/experience' element={<SocialLinks />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
