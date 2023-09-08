import React, { useState } from 'react';

function LoginPassword() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contraseña:', password);
  };


  const containerStyle = {
    
    padding: '20px',
    borderRadius: '1px',
    fontSize: '20px',
    
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
          <input 
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="contraseña"
          />
    </form>
  );
}

export default LoginPassword;