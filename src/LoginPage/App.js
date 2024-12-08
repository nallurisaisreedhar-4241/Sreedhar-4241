
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
// import './Login.css';
// import './App.css';
// import Alert from '@mui/material/Alert';
// import HomePage from '../HomePage/HomePage'; // Import your home page component
// import SignIn from '../SignIn/SignIn'; // Import your sign in component
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import axios from 'axios';
// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(true);
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleCheckboxChange = () => {
//     setRememberMe(!rememberMe);
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/login', {
//         username,
//         password
//       });
//       const { token } = response.data;
//       localStorage.setItem('token', token); // Store token in localStorage
//       navigate('/home'); // Navigate to home page
//     } catch (error) {
//       setError('Invalid username or password!');
//       console.error('Login error:', error);
//     }
//   };
  

//   useEffect(() => {
//     if (error) {
//       setError('');
//     }
//   }, [error]); 
  

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//    <div>
//       <h2>Login Form</h2> 
//       <div className="login-App">
//       <div className="login-container">
//         <div>
//           <label htmlFor="uname"><b>Username</b></label>
//           <input
//             type="text"
//             placeholder="Enter Username"
//             name="uname"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="psw"><b>Password</b></label>
//           <div className="password-container">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter Password"
//               name="psw"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
//               {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//             </button>
//           </div>
//         </div>
//         {error && <Alert severity="error">{error}</Alert>}
//         <br />
//         <div>
//           <button type="submit" onClick={handleLogin}>Login</button>
//         </div>
//         <br />
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={handleCheckboxChange}
//               name="remember"
//             /> Remember me
//           </label>
//         </div>
//         <div className='signin-link'>
//           Don't have an account? <Link to="/signin">Sign In</Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
// import './Login.css';
import './App.css';
import Alert from '@mui/material/Alert';
import HomePage from '../HomePage/HomePage'; // Import your home page component
import SignIn from '../SignIn/SignIn'; // Import your sign in component
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = (event) => {
    event.preventDefault(); 
    if (username === 'nallurisaisreedhar' && password === 'NSSNGS745') {
      setError(''); 
      navigate('/home');
    } else {
      setError('Invalid username or password!');
    }
  };

  useEffect(() => {
    if (error) {
      setError('');  
    }
  }, [username, password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <h2>Login Form</h2>
      <div className="container">
        <div>
          <label htmlFor="uname"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="psw"><b>Password</b></label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
        </div>
        {error && <Alert severity="error">{error}</Alert>}
        <br />
        <div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>
        <br />
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
              name="remember"
            /> Remember me
          </label>
        </div>
        <div className='signin'>
          Don't have an account? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
