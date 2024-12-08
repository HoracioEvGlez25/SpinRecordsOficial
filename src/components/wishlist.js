import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className="container my-5">
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
        Lista de Deseos
      </h2>
      {wishlistItems.length === 0 ? (
        <p
          className="text-center"
          style={{
            fontSize: '1.2rem',
            color: '#6c757d',
          }}
        >
          No hay productos en la lista de deseos.
        </p>
      ) : (
        <div className="row">
          {wishlistItems.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className="card-body">
                  {product.title && (
                    <p className="card-title"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#000', 
                      }}>
                      {product.title}
                    </p>
                  )}
                  {product.name && (
                    <p className="card-title"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#000', 
                      }}>
                      {product.name}
                    </p>
                  )}
                  {product.artist && (
                    <p className="card-text mb-1 text-secondary">
                      <strong>Artista:</strong> {product.artist}
                    </p>
                  )}
                  {product.genre && (
                    <p className="card-text mb-1 text-secondary">
                      <strong>Género:</strong> {product.genre}
                    </p>
                  )}
                  {product.brand && (
                    <p className="card-text mb-1 text-secondary">
                      <strong>Marca:</strong> {product.brand}
                    </p>
                  )}
                  {product.type && (
                    <p className="card-text mb-1 text-secondary">
                      <strong>Tipo:</strong> {product.type}
                    </p>
                  )}
                  <p
                    className="card-text mb-3"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#000', 
                    }}
                  >
                    {product.price}
                  </p>
                  {product.tipo === 'vinilo' ? (
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-secondary active"
                    >
                      Ver detalles del vinilo
                    </Link>
                  ) : product.tipo === 'tocadisco' ? (
                    <Link
                      to={`/detailsTD/${product.id}`}
                      className="btn btn-secondary active"
                    >
                      Ver detalles del tocadisco
                    </Link>
                  ) : null}
                  <button
                    className="btn btn-warning"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ); 
};

export default Wishlist;
