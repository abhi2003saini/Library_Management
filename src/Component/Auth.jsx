import React, { useState } from 'react';

export default function AuthPage() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [name, setName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPass, setSignupPass] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPass) {
      setMessage('Login logic not implemented.');
      console.log('Login:', loginEmail, loginPass);
    } else {
      setMessage('Please enter both email and password.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && signupEmail && signupPass) {
      setMessage('Signup logic not implemented.');
      console.log('Signup:', name, signupEmail, signupPass);
      setIsLoginPage(true);
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f0f0',
    },
    panel: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      width: '320px',
    },
    heading: { textAlign: 'center', marginBottom: '20px' },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4A90E2',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    linkStyle: {
      color: '#4A90E2',
      cursor: 'pointer',
      textAlign: 'center',
      display: 'block',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        {isLoginPage ? (
          <form onSubmit={handleLogin}>
            <h2 style={styles.heading}>Login</h2>
            <input
              type="email"
              placeholder="Enter Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Login</button>
            {message && (
              <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>
            )}
            <span
              style={styles.linkStyle}
              onClick={() => setIsLoginPage(false)}
            >
              Don't have an account? Signup
            </span>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h2 style={styles.heading}>Signup</h2>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={signupPass}
              onChange={(e) => setSignupPass(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Sign Up</button>
            {message && (
              <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>
            )}
            <span
              style={styles.linkStyle}
              onClick={() => setIsLoginPage(true)}
            >
              Already have an account? Login
            </span>
          </form>
        )}
      </div>
    </div>
  );
}
