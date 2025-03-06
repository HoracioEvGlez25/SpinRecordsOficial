import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function Catalog({ addToCart, addToWishlist }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('A-Z');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('/Products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  };

  const sortProducts = (products, option) => {
    switch (option) {
      case 'A-Z':
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case 'Z-A':
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      case 'price-low-high':
        return [...products].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'price-high-low':
        return [...products].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div
      className="container my-5 p-4"
      style={{
        background: 'linear-gradient(135deg,rgb(232, 238, 244), #e9ecef)',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="my-4">
        <img
          src="/Vff.jpeg"
          alt="Imagen destacada del catálogo"
          className="img-fluid rounded shadow"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      <h2
        className="text-center mb-4"
        style={{
          color: '#343a40',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
          borderBottom: '3px solid #17a2b8',
          paddingBottom: '0.5rem'
        }}
      >
        Nuestro Catálogo de Vinilos
      </h2>

      <div className="mb-4 text-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-3">
          <label htmlFor="sortOption" className="mr-2 font-weight-bold">
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
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
          >
            <option value="A-Z">Nombre (A-Z)</option>
            <option value="Z-A">Nombre (Z-A)</option>
            <option value="price-low-high">Precio (Menor a Mayor)</option>
            <option value="price-high-low">Precio (Mayor a Menor)</option>
          </select>
        </div>
      </div>

      {currentProducts.length === 0 ? (
        <div className="text-center">
          <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>No se encontraron resultados.</p>
        </div>
      ) : (

<div className="row">
  {currentProducts.map((product) => (
    <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
      <div
        className="card h-100 text-center"
        style={{
          backgroundColor: '#2b2b3c', 
          color: '#f5f5f5', 
          border: 'none',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', 
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
        }}
      >
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.title}
          style={{
            borderRadius: '15px 15px 0 0',
            objectFit: 'cover',
            height: '250px',
          }}
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold" style={{ color: '#FFFFFF' }}>
            {product.title}
          </h5>
          <p className="card-text" style={{ color: '#d3d3d3' }}>
            Artista: {product.artist}
          </p>
          <p className="text-primary font-weight-bold" style={{ color: '#4caf50' }}>
            {product.price}
          </p>
          <p className="card-text" style={{ color: '#d3d3d3' }}>
            Género: {product.genre}
          </p>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-light"
              style={{
                borderRadius: '20px',
                fontWeight: '500',
                color: '#f5f5f5',
                borderColor: '#f5f5f5',
              }}
              onClick={() => addToCart(product)}
            >
              Agregar al Carrito
            </button>
            <button
              className="btn btn-outline-light"
              style={{
                borderRadius: '20px',
                fontWeight: '500',
                color: '#f5f5f5',
                borderColor: '#f5f5f5',
              }}
              onClick={() => addToWishlist(product)}
            >
              Wishlist
            </button>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary mt-3 d-block"
            style={{
              borderRadius: '20px',
              fontWeight: '500',
              backgroundColor: '#4575B2',
              color: 'black',
              borderColor: '#4caf50',
            }}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

      )}

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  borderRadius: '50%',
                  fontWeight: '500'
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>

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
          ¿Qué géneros de vinilos están disponibles?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="faqOne"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#343a40' }}>
        Contamos con una amplia selección de subgéneros del Rock desde el Rock más clásico, hasta Rock Alternativo. Actualizamos constantemente nuestro catálogo para ofrecer las últimas novedades y clásicos inolvidables.
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
          ¿Cómo se realiza el envío para garantizar que los vinilos lleguen en buen estado?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="faqTwo"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#343a40' }}>
        Empacamos los vinilos cuidadosamente utilizando fundas protectoras y cajas reforzadas para evitar daños durante el envío.
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

export default Catalog;
