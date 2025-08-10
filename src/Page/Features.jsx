import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBook, faBell, faCalendarDays, faChartLine, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import './features.css';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const featureData = [
  {
    icon: faUserGroup,
    title: "Smart Member Management",
    description: "Track member profiles, attendance, and activities with AI-powered insights.",
  },
  {
    icon: faBook,
    title: "Intelligent Cataloging",
    description: "Auto-categorize and manage books with smart tagging and recommendations.",
  },
  {
    icon: faBell,
    title: "Proactive Reminders",
    description: "Send personalized notifications via SMS/email based on user preferences.",
  },
  {
    icon: faCalendarDays,
    title: "Dynamic Resource Planning",
    description: "Optimize seating and shift management with predictive analytics.",
  },
  {
    icon: faChartLine,
    title: "Advanced Analytics",
    description: "Make data-driven decisions with real-time insights and trends.",
  },
  {
    icon: faMobileScreenButton,
    title: "Mobile-First Experience",
    description: "Access your library anytime, anywhere with our responsive platform.",
  },
];

function Features() {
  return (
    <>
    <Header/>
    
      <div className='features text-center mb-5'>
  <h6>POWERFUL FEATURES</h6>
  <h1>Smart Solutions For Modern Libraries</h1>
  <p>Experience the future of library management with our innovative features</p>
</div>


<div className='container-fluid'>
  <div className='container'>
    <div className='row'>
      {featureData.map((feature, index) => (
        <div className='col-lg-4 mb-4' key={index}>
          <div className='feature-card'>
            <div className='icon-circle mb-3'>
              <FontAwesomeIcon icon={feature.icon} size="2x" />
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<Footer/>
    </>
  );
}

export default Features;
