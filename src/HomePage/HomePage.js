// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AndroidIcon from '@mui/icons-material/Android';
// import './HomePage.css';
// import TemporaryDrawer from '../HomePage/Profile/Profile';
// import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

// function HomePage() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Logic to handle logout (e.g., clearing user session)
//     navigate('/');
//   };

//   return (
//     <div className="homepage">
//       <header className="header">
//       <div className="logo">
//         <AndroidIcon />
//         NSSNGS
//         </div>

//         <nav className="nav">
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="">CallOutlinedIcon</a></li>
//             <li><TemporaryDrawer /></li>
//             <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
//           </ul>
//         </nav>
//       </header>
      
//       <section className="hero">
//         <h1>Welcome to MyWebsite</h1>
//         <p>Your one-stop solution for all your needs</p>
//         <button>Get Started</button>
//       </section>
      
//       <section className="features">
//         <h2>Our Features</h2>
//         <div className="feature-cards">
//           <div className="feature-card">
//             <h3>Feature One</h3>
//             <p>Description of feature one.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Feature Two</h3>
//             <p>Description of feature two.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Feature Three</h3>
//             <p>Description of feature three.</p>
//           </div>
//         </div>
//       </section>
      
//       <footer className="footer">
//         <p>&copy; 2024 MyWebsite. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import AndroidIcon from '@mui/icons-material/Android';
import './HomePage.css';
import TemporaryDrawer from '../HomePage/Profile/Profile';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BasicDatePicker from './datepicker';
import SearchComponent from './searchbar';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout (e.g., clearing user session)
    navigate('/');
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <AndroidIcon />
          NSSNGS
        </div>

        <nav className="nav">
          <ul>
            <li><SearchComponent  /></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="services"><SupportAgentIcon /></a></li>
            <li>
              <a href="tel:+918309777504" className="contact-icon">
                <CallOutlinedIcon />
              </a>
            </li>
            <li><TemporaryDrawer /></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for all your needs</p>
        <button>Get Started</button>
      </section>

      <section className="date-picker-section">
        <h2>Select a Date</h2>
        <BasicDatePicker />
      </section>
      

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Feature One</h3>
            <p>Description of feature one.</p>
          </div>
          <div className="feature-card">
            <h3>Feature Two</h3>
            <p>Description of feature two.</p>
          </div>
          <div className="feature-card">
            <h3>Feature Three</h3>
            <p>Description of feature three.</p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
