import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importa FaUser

function BoardNavigation({ cartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#171a4a',
      padding: '15px 30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      {/* Logo */}
      <Link 
        to="/" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          textDecoration: 'none', 
          color: 'white' 
        }}
      >
        <img 
          src="/LogoSpinRecords.png" 
          alt="Logo de Spin Records" 
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginRight: '10px',
          }} 
        />
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
        }}>
          Spin Records
        </span>
      </Link>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <Link to="/catalog" style={linkStyle}>Vinilos</Link>
        <Link to="/TocaDiscos" style={linkStyle}>TocaDiscos</Link>
        <Link to="/wishlist" style={linkStyle}>Lista de Deseos</Link>
        <Link to="/login" style={linkStyle}>Iniciar Sesión</Link>
        <Link to="/register" style={linkStyle}>Registrarse</Link>
       
        <Link to="/profile" style={{
          ...linkStyle,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <FaUser /> 
        </Link>
        <div 
          onClick={toggleCart} 
          style={{
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaShoppingCart style={{ marginRight: '8px' }} />
          ({cartItems.length})
        </div>
      </div>

      {isCartOpen && (
        <>
          <div style={cartModalStyle}>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              color: '#343a40',
            }}>
              Carrito de Compras
            </h3>
            {cartItems.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cartItems.map((item) => (
                  <li key={item.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                    fontSize: '0.9rem',
                  }}>
                    <span>{item.title}</span>
                    <span>{item.name}</span>
                    <span>Cantidad: {item.quantity}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                El carrito está vacío.
              </p>
            )}
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button onClick={toggleCart} style={buttonStyle}>
                Cerrar
              </button>
              <Link to="/PurchaseOrder" style={buttonLinkStyle}>
                Completar Compra
              </Link>
            </div>
          </div>

          <div 
            style={overlayStyle} 
            onClick={toggleCart}
          ></div>
        </>
      )}
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.3s',
  cursor: 'pointer',
};

const cartModalStyle = {
  position: 'fixed',
  top: '20%',
  right: '20%',
  width: '320px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  zIndex: 1000,
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#343a40',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonLinkStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  textAlign: 'center',
  borderRadius: '4px',
  fontWeight: '500',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
};

export default BoardNavigation;
