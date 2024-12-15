// import React, { useState} from 'react';
// import Alert from '@mui/material/Alert';
// import { useNavigate, Link } from 'react-router-dom';
// import './SignIn.css';

// function SignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = (event) => {
//     event.preventDefault();
    
//     // Validate if any field is empty
//     if (!email || !username || !password || !confirmPassword) {
//       setError('All fields are required!');
//       return;
//     }

//     // Validate if passwords match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     // If all validations pass
//     setError('');
//     navigate('/');
//   };
//   return (
//     <div>
//       <h2>Sign Up Form</h2>
//       <div className="sigin-App">
//       <div className="signup-container">
//         <div>
//           <label htmlFor="email"><b>Email</b></label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <br />
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
//           <input
//             type="password"
//             placeholder="Enter Password"
//             name="psw"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="confirm-psw"><b>Confirm Password</b></label>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirm-psw"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && (
//             <Alert severity="error" onClose={() => setError('')}>
//               {error}
//             </Alert>
//           )}
//         <br />
//         <div>
//           <button type="submit" onClick={handleSignUp}>Sign Up</button>
//         </div>
//         <div className='login-link'>
//           Already have an account? <Link to="/">Login</Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default SignIn;


import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    // Validate if any field is empty
    if (!email || !username || !password || !confirmPassword) {
      setError('All fields are required!');
      return;
    }

    // Validate if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Prepare user data object
    const newUser = { username, email, password };

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the array
    existingUsers.push(newUser);

    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Clear the form fields and navigate to the login page
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    navigate('/');
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <div className="signin-App">
        <div className="signup-container">
          <div>
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
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
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="confirm-psw"><b>Confirm Password</b></label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm-psw"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <Alert severity="error" onClose={() => setError('')}>
              {error}
            </Alert>
          )}
          <br />
          <div>
            <button type="submit" onClick={handleSignUp}>Sign Up</button>
          </div>
          <div className='login-link'>
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
