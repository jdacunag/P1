// LoginForm.js
import React, { useState } from 'react';

function LoginUser() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const containerStyle = {
    
    padding: '20px',
    borderRadius: '1px',
    fontSize: '20px',
    
    
  };

  return (
    <form onSubmit={handleSubmit} style ={containerStyle}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Usuario"
        />
    </form>
  );
}



export default LoginUser;
