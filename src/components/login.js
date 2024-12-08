import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  console.log('Componente de Login montado');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/LogoSpinRecords.png" alt="Logo Spin Records" className="logo" style={{ maxWidth: '150px', height: 'auto' }} />
      </div>
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#000', 
          borderBottom: '2px solid #000', 
          paddingBottom: '0.5rem',
        }}
      >
        Iniciar Sesión
      </h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>

        <div className="links-container">
          <Link to="/register" className="btn btn-primary">
            ¿Aún no tienes una cuenta? Regístrate aquí
          </Link>
          <Link to="/" className="btn btn-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
