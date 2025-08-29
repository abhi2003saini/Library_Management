// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faInfoCircle,
  faStar,
  faCog,
  faVideo,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../Page/firebase';
// import { auth } from './firebase'; // adjust path if needed
// import { auth } from '../Page/firebase';

function Header() {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      signOut(auth)
        .then(() => {
          console.log("User logged out");
        })
        .catch((error) => {
          console.error("Logout Error:", error);
        });
    }
  };

  return (
    <>
      <div className="header">
        <header className="bg-light shadow-sm">
          <nav className="navbar navbar-expand-md container pt-0">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src="logo.png"
                alt="Library Management"
                style={{ width: '250px', height: '60px' }}
                className="me-2"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible content */}
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link px-3 text-dark" to="/home">
                    <FontAwesomeIcon icon={faHouse} className="me-2" />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 text-dark" to="/about">
                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 text-dark" to="/features">
                    <FontAwesomeIcon icon={faStar} className="me-2" />
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 text-dark" to="/services">
                    <FontAwesomeIcon icon={faCog} className="me-2" />
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 text-dark" to="/demo">
                    <FontAwesomeIcon icon={faVideo} className="me-2" />
                    Demo
                  </Link>
                </li>
              </ul>

              {/* Book Now Button */}
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    (window.location.href =
                      'https://www.trackmylibrary.in/dashboard')
                  }
                >
                  Book Now
                </button>

                {/* Logout Button */}
                <button
                  className="btn btn-danger"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;


// // Header.js
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHouse,
//   faInfoCircle,
//   faStar,
//   faCog,
//   faVideo
// } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import './header.css';

// function Header() {
//   return (
//     <>
//     <div className="header">
//       <header className="bg-light shadow-sm">
//         <nav className="navbar navbar-expand-md container pt-0">
//           <Link className="navbar-brand d-flex align-items-center" to="/">
//             <img
//               src="logo.png"
//               alt="Library Management"
//               style={{ width: '250px', height: '60px' }}
//               className="me-2"
//             />
//           </Link>

//           {/* Toggle button for mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarContent"
//             aria-controls="navbarContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapsible content */}
//           <div className="collapse navbar-collapse" id="navbarContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-md-0">
//               <li className="nav-item">
//                 <Link className="nav-link px-3 text-dark" to="/">
//                   <FontAwesomeIcon icon={faHouse} className="me-2" />
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link px-3 text-dark" to="/about">
//                   <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link px-3 text-dark" to="/features">
//                   <FontAwesomeIcon icon={faStar} className="me-2" />
//                   Features
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link px-3 text-dark" to="/services">
//                   <FontAwesomeIcon icon={faCog} className="me-2" />
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link px-3 text-dark" to="/demo">
//                   <FontAwesomeIcon icon={faVideo} className="me-2" />
//                   Demo
//                 </Link>
//               </li>
//             </ul>

//             <div className="text-end">
//               <button
//                 className="btn btn-primary"
//                 onClick={() => window.location.href = "https://www.trackmylibrary.in/dashboard"}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//     <div><h1>Hello</h1></div>
//     </>
//   );
// }

// export default Header;


