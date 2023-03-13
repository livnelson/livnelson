import React, { useState } from 'react'
import '../styles/Projects.css'
import '../styles/ProjectCard.css'
import '../styles/ProjectDetails.css'

function Projects() {
  const [showMyflix, setShowMyflix] = useState(false)
  const [showRoadTrip, setShowRoadTrip] = useState(false)
  const [showInstaFame, setShowInstaFame] = useState(false)
  const [showRoadTripDemoLink, setShowRoadTripDemoLink] = useState(false)
  const [showInstaFameDemoLink, setShowInstaFameDemoLink] = useState(false)

  function handleMyflix() {
    setShowMyflix(!showMyflix)
  }

  function handleRoadTrip() {
    setShowRoadTrip(!showRoadTrip)
  }

  function handleInstaFame() {
    setShowInstaFame(!showInstaFame)
  }

  function handleRoadTripDemoClick() {
    setShowRoadTripDemoLink(!showRoadTripDemoLink)
  }

  function handleInstaFameDemoClick() {
    setShowInstaFameDemoLink(!showInstaFameDemoLink)
  }

  return (
    <div className='projects-section' id='projects'>
      <h2 className='sub-heading'>Recent Projects</h2>
      <div className='projects'>
        <div className='project-card'
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/myflix_ob6agt.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className='project-detail-info'>
            <h3 className='project-title'>Myflix</h3>
            <h5 className='project-technologies'>Technologies Used:</h5>
            <p className='project-card-tech'>React, Rails</p>
            <br />
            <button className='project-details-btn' onClick={handleMyflix}>Learn More</button>
          </div>
          {showMyflix ? <div className='project-details'>
            <div className='project-details-content'>
              <img className='project-details-img' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/myflix_ob6agt.jpg' alt='Myflix' />
              <h3 className='project-details-overview'>Overview</h3>
              <ul className='project-details-desc'><em>A Netflix clone app that allows users to log in and view movie trailers, add movies to favorites and search titles</em>
                <li className='project-dets'>Implemented React to create an interactive & efficient UI with custom CSS to simulate user experience of Netflix.</li>
                <li className='project-dets'>Employed BCrypt to securely store encrypted passwords in the database and implemented custom authentication.</li>
                <li className='project-dets'>Acquired and utilized new technologies including React-Router-Dom, Axios, YouTube & useSound.</li>
                <li className='project-dets'>Developed a Rails API back-end to efficiently handle data persistence & respond to fetch requests.</li>
              </ul>
              <h3 className='project-details-tech'>Technologies</h3>
              <ul className='project-tech-details'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
              </ul>
              <br />
              <button className='project-link'><a className='proj-btn-link' href='https://github.com/livnelson/Myflix' target='_blank' rel="noreferrer">Github Repo</a></button>
              <button className='project-link'> <a className='proj-btn-link' href="https://myflix-db.onrender.com/" target='_blank' rel="noreferrer">Deployed Demo</a></button>
              <button className='back-home' onClick={handleMyflix}>Close</button>
            </div>
          </div> : null}
        </div>

        <div className='project-card'
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/road-trip_tjppal.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className='project-detail-info'>
            <h3 className='project-title'>National Park Trip Planner</h3>
            <h5 className='project-technologies'>Technologies Used:</h5>
            <p className='project-card-tech'>React, Rails</p>
            <br />
            <button className='project-details-btn' onClick={handleRoadTrip}>Learn More</button>
          </div>
          {showRoadTrip ? <div className='project-details'>
            <div className='project-details-content'>
              <img className='project-details-img' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/road-trip_tjppal.jpg' alt='Myflix' />
              <h3 className='project-details-overview'>Overview</h3>
              <ul className='project-details-desc'><em>This app helps users plan trips and available activities to National Parks located in the State of California</em>
                <li className='project-dets'>Utilized React & Ruby on Rails to create a single page web app that allows users to plan/create, edit & delete their trip.</li>
                <li className='project-dets'>Coordinated with team on what app functionality to build out.</li>
                <li className='project-dets'>Expanded my knowledge working with API’s.</li>
              </ul>
              <h3 className='project-details-tech'>Technologies</h3>
              <ul className='project-tech-details'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
              </ul>
              <br />
              <button className='project-link'><a className='proj-btn-link' href='https://github.com/livnelson/National-Park-Trip-Planner' target='_blank' rel="noreferrer">Github Repo</a></button>
              <button className='project-link' onClick={handleRoadTripDemoClick}>{showRoadTripDemoLink ? 'Coming Soon!' : 'Deployed Demo'}</button>
              <button className='back-home' onClick={handleRoadTrip}>Close</button>
            </div>
          </div> : null}
        </div>

        <div className='project-card'
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/instafame_m9sal9.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className='project-detail-info'>
            <h3 className='project-title'>InstaFame</h3>
            <h5 className='project-technologies'>Technologies Used:</h5>
            <p className='project-card-tech'>React, Sinatra</p>
            <br />
            <button className='project-details-btn' onClick={handleInstaFame}>Learn More</button>
          </div>
          {showInstaFame ? <div className='project-details'>
            <div className='project-details-content'>
              <img className='project-details-img' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/instafame_m9sal9.jpg' alt='Myflix' />
              <h3 className='project-details-overview'>Overview</h3>
              <ul className='project-details-desc'><em>Social media style message and picture sharing application inspired by Instagram</em>
                <li className='project-dets'>Developed JavaScript/React front-end and leveraged the Sinatra framework to build the application & used custom CSS along with Material UI to design the look.</li>
                <li className='project-dets'>Utilized Tokens and sessions to keep users logged in upon page refresh and established backend associations to associate likes & other features with users.</li>
                <li className='project-dets'>Adhered to RESTful & built CRUD functionality for core resources.</li>
              </ul>
              <h3 className='project-details-tech'>Technologies</h3>
              <ul className='project-tech-details'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Sinatra</li>
              </ul>
              <br />
              <button className='project-link'><a className='proj-btn-link' href='https://github.com/livnelson/InstaFame' target='_blank' rel="noreferrer">Github Repo</a></button>
              <button className='project-link' onClick={handleInstaFameDemoClick}>{showInstaFameDemoLink ? 'Coming Soon!' : 'Deployed Demo'}</button>
              <button className='back-home' onClick={handleInstaFame}>Close</button>
            </div>
          </div> : null}
        </div>
      </div>
    </div>
  )
}

export default Projects