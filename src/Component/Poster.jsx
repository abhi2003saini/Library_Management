import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faPlay, faBook, faUserCheck, faSchool } from '@fortawesome/free-solid-svg-icons';
import './poster.css';

function Poster() {
  return (
    <div className="poster">
      <div className="overlay">
        <div className="content">
          <p className="badge">🚀 Next-Gen Library Management</p>
          <h1 className="headline">
            Manage Your Library<br />
            Into a Smart Way
          </h1>
          <p className="subtext">
            Track students, manage seats, fees and gain insights with our<br />
            intelligent library management system.
          </p>
          <div className="buttons">
            <button className="btn-primary">
              Start Tracking <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
            <button className="btn-outline">
              Watch Demo <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <FontAwesomeIcon icon={faBook} />
              <h4>1000+</h4>
              <p>Libraries</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faUserCheck} />
              <h4>1M+</h4>
              <p>Students Tracked</p>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faSchool} />
              <h4>500+</h4>
              <p>Institutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
