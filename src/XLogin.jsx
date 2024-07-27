import React, { useState } from 'react';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <div>
          {/* <h1>Welcome, user!</h1> */}
          <p>Welcome, user!</p>
        </div>
      ) : (
        <div>
          {/* <h1>Login Page</h1> */}
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default XLogin;
