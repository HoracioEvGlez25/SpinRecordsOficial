import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function TocaDiscos({ addToCart, addToWishlist }) {
  const [tocadiscos, setTocadiscos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');

  useEffect(() => {
    fetch('/TD.json')
      .then((response) => response.json())
      .then((data) => {
        setTocadiscos(data);
      })
      .catch((error) => console.error('Error al cargar tocadiscos:', error));
  }, []);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  };

  const sortTD = (tocadiscos, option) => {
    switch (option) {
      case 'A-Z':
        return [...tocadiscos].sort((a, b) => a.name.localeCompare(b.name));
      case 'Z-A':
        return [...tocadiscos].sort((a, b) => b.name.localeCompare(a.name));
      case 'price-low-high':
        return [...tocadiscos].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'price-high-low':
        return [...tocadiscos].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      default:
        return tocadiscos;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = tocadiscos.filter((tocadisco) =>
    tocadisco.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTD = sortTD(filteredProducts, sortOption);

  return (
    <div
      className="container my-5 p-4"
      style={{
        background: 'linear-gradient(135deg,rgb(220, 230, 234), #e9ecef)',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="my-4">
        <img
          src="/TDF.jpg"
          alt="Imagen destacada del catálogo"
          className="img-fluid rounded shadow"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      <h2
        className="text-center mb-4"
        style={{
          color: '#333',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
          borderBottom: '3px solid #00c6ff',
          paddingBottom: '0.5rem',
          marginBottom: '1.5rem',
        }}
      >
        Nuestro Catálogo de TocaDiscos
      </h2>

      <div className="mb-4 text-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-3">
          <label
            htmlFor="sortOption"
            className="mr-2"
            style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
          >
            Ordenar por:
          </label>
          <select
            id="sortOption"
            className="form-control d-inline-block w-auto"
            value={sortOption}
            onChange={handleSortChange}
            style={{
              borderRadius: '10px',
              padding: '5px 15px',
              fontWeight: '500',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <option value="A-Z">Nombre (A-Z)</option>
            <option value="Z-A">Nombre (Z-A)</option>
            <option value="price-low-high">Precio (Menor a Mayor)</option>
            <option value="price-high-low">Precio (Mayor a Menor)</option>
          </select>
        </div>
      </div>

      {sortedTD.length === 0 ? (
        <div className="text-center">
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>No se encontraron resultados.</p>
        </div>
      ) : (
        <div className="row">
          {sortedTD.map((tocadisco) => (
            <div className="col-md-4 mb-4" key={tocadisco.id}>
              <div
                className="card h-100"
                style={{
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={tocadisco.imageUrl}
                  alt={tocadisco.name}
                  className="card-img-top"
                  style={{
                    borderRadius: '15px 15px 0 0',
                    objectFit: 'cover',
                    height: '200px',
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontWeight: 'bold', color: '#343a40' }}>
                    {tocadisco.name}
                  </h5>
                  <p className="card-text text-muted">Marca: {tocadisco.brand}</p>
                  <p
                    className="card-text"
                    style={{
                      fontWeight: 'bold',
                      color: '#007bff',
                    }}
                  >
                    {tocadisco.price}
                  </p>
                  <p className="card-text text-muted">Tipo: {tocadisco.type}</p>
                  <Link
                    to={`/detailstd/${tocadisco.id}`}
                    className="btn btn-primary mt-auto"
                    style={{
                      borderRadius: '20px',
                      fontWeight: '500',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Ver detalles
                  </Link>
                  <button
                    className="btn btn-light"
                    style={{
                      borderRadius: '20px',
                      fontWeight: '500',
                    }}
                    onClick={() => addToCart(tocadisco)}
                  >
                    Agregar al Carrito
                  </button>
                  <button
                    className="btn btn-light"
                    style={{
                      borderRadius: '20px',
                      fontWeight: '500',
                    }}
                    onClick={() => addToWishlist(tocadisco)}
                  >
                    Agregar a Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

<div className="faq-section mt-5 pt-4">
<h3
    className="text-center mb-4"
    style={{
      color: '#333',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      borderBottom: '2px solid #007bff',
      paddingBottom: '0.5rem',
    }}
  >
    Preguntas Frecuentes
  </h3>
  <div className="accordion" id="faqAccordion">
    <div className="accordion-item" style={{ border: `1px solid #060270` }}>
      <h2 className="accordion-header" id="faqOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          style={{
            backgroundColor: '#060270',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px',
          }}
        >
          ¿Qué marcas de tocadiscos ofrecen?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="faqOne"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#343a40' }}>
          Ofrecemos una selección de las mejores marcas como Audio-Technica, Sony, y más.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={{ border: `1px solid #060270` }}>
      <h2 className="accordion-header" id="faqTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          style={{
            backgroundColor: '#060270',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px',
          }}
        >
          ¿Hacen envíos internacionales?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="faqTwo"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#343a40' }}>
          No, de momento solo hacemos envíos dentro de México.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={{ border: `1px solid #060270` }}>
      <h2 className="accordion-header" id="faqThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          style={{
            backgroundColor: '#060270',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px',
          }}
        >
          ¿Ofrecen garantía en los productos?
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="faqThree"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#343a40' }}>
          Sí, todos nuestros productos tienen garantía de 6 meses.
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default TocaDiscos;
