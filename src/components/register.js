import React, { useState } from 'react';
import '../styles/Register.css'; 

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Registro:', { name, email, password, phone, address });
  };

  return (
    <div className="register-container">
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
        Registro
      </h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <label>Teléfono</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Ingresa tu teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
