import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image, Modal } from 'react-bootstrap';
import { FaCompactDisc } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function Product({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [showSongsModal, setShowSongsModal] = useState(false);

  useEffect(() => {
    fetch('/Products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON.');
        }
        return response.json();
      })
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);

        if (foundProduct) {
          const recommendations = data.filter(
            (p) => p.genre === foundProduct.genre && p.id !== foundProduct.id
          );
          setRelatedProducts(recommendations);
        }
      })
      .catch((error) => console.error('Error al cargar el producto:', error));
  }, [id]);

  const handleShowSongs = () => setShowSongsModal(true);
  const handleCloseSongs = () => setShowSongsModal(false);

  if (!product) {
    return <div className="text-center mt-5">Cargando detalles del producto...</div>;
  }

  return (
    <Container className="my-5 p-4 rounded shadow" style={{ backgroundColor: '#e6e6dd' }}>
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Button
            variant="outline-primary"
            className="d-flex align-items-center justify-content-center rounded-pill px-4 shadow-sm mt-3"
            style={{ fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#2c3e50', color: '#ffffff' }}
            onClick={handleShowSongs}
          >
            <FaCompactDisc className="me-2" style={{ fontSize: '1.5rem' }} />
            Mostrar canciones
          </Button>
        </Col>
        
        <Col md="6">
  <Card
    className="border-0 shadow-sm"
    style={{
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      overflow: 'hidden',
    }}
  >
    <Card.Body className="p-4">
      <Card.Title
        className="mb-3"
        style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          color: '#34495e',
          borderBottom: '2px solid #ddd',
          paddingBottom: '8px',
        }}
      >
        {product.title}
      </Card.Title>
      <Card.Text className="mb-3">
        <span style={{ fontSize: '1.1rem', color: '#2c3e50' }}>
          <strong>Artista:</strong> {product.artist}
        </span>
      </Card.Text>
      <Card.Text className="mb-3">
        <strong>Precio:</strong>{' '}
        <span
          style={{
            fontSize: '1.3rem',
            color: '#27ae60',
            fontWeight: 'bold',
          }}
        >
          ${product.price}
        </span>
      </Card.Text>
      <Card.Text
        style={{
          lineHeight: '1.6',
          color: '#2c3e50',
          fontSize: '1rem',
        }}
      >
        <strong>Descripción:</strong> {product.description}
      </Card.Text>
      <Card.Text className="mb-3">
        <strong>Géneros:</strong>{' '}
        <span style={{ fontStyle: 'italic' }}>{product.SubG}</span>
      </Card.Text>
      <div className="mt-4">
        <h5
          style={{
            fontWeight: '600',
            color: '#2c3e50',
            fontSize: '1.2rem',
          }}
        >
          Califica este producto:
        </h5>
        <div className="d-flex align-items-center">
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-between">
        <Button
          variant="outline-dark"
          className="rounded-pill px-4 py-2 shadow-sm"
          style={{
            border: '2px solid #34495e',
            color: '#34495e',
            fontWeight: '500',
          }}
          onClick={() => addToWishlist(product)}
        >
          Agregar a Wishlist
        </Button>
        <Button
          variant="success"
          className="rounded-pill px-4 py-2 shadow-sm"
          style={{
            backgroundColor: '#27ae60',
            borderColor: '#27ae60',
            fontWeight: '500',
          }}
          onClick={() => addToCart(product)}
        >
          Agregar al Carrito
        </Button>
      </div>
    </Card.Body>
  </Card>
</Col>

      </Row>

      {/* Section for Related Images */}

      <Row className="mt-5">
  <Col>
    <h4 className="mb-4" style={{ fontWeight: '600', color: '#34495e', textTransform: 'uppercase', borderBottom: '3px solid #2980b9', display: 'inline-block' }}>
      Imágenes relacionadas
    </h4>
    {product.relatedImages && product.relatedImages.length > 0 ? (
      <Row className="gx-4 gy-4">
        {product.relatedImages.map((image, index) => (
          <Col lg="3" md="4" sm="6" xs="12" key={index}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{
                overflow: 'hidden',
                borderRadius: '12px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ position: 'relative' }}>
                <Card.Img
                  src={image}
                  alt={`Imagen relacionada ${index + 1}`}
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                  }}
                >
                   {index + 1}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    ) : (
      <div className="text-center py-5">
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          No hay imágenes relacionadas disponibles para este producto.
        </p>
      </div>
    )}
  </Col>
</Row>

      {/* Modal for Songs */}
      <Modal show={showSongsModal} onHide={handleCloseSongs} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#000', borderBottom: '1px solid #444' }}>
          <Modal.Title style={{ color: '#fff' }}>Canciones de {product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#000', color: '#fff' }}>
          {product.songs && product.songs.length > 0 ? (
            <ul className="list-group">
              {product.songs.map((song, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  style={{ backgroundColor: '#1c1c1c', color: '#fff', border: '1px solid #444' }}
                >
                  {song}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay canciones disponibles para este álbum.</p>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#000', borderTop: '1px solid #444' }}>
          <Button
            variant="secondary"
            onClick={handleCloseSongs}
            style={{ backgroundColor: '#268101', border: 'none' }}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-5">
        <Col className="text-center">
        <h4 className="mb-4" style={{ fontWeight: '600', color: '#34495e', textTransform: 'uppercase', borderBottom: '3px solid #2980b9', display: 'inline-block' }}>
      Reseñas
    </h4>
          <Image
            src="/Reseñas.png" 
            alt="Imagen adicional"
            className="img-fluid rounded"
            style={{
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              border: '3px solid #e9ecef',
              borderRadius: '15px',
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
            }}
          />
        </Col>
      </Row>

      {/* Related Products Section */}
      <Row className="mt-5">
  <Col>
  <h4 className="mb-4" style={{ fontWeight: '600', color: '#34495e', textTransform: 'uppercase', borderBottom: '3px solid #2980b9', display: 'inline-block' }}>
      Te podría interesar
    </h4>
    <Row>
      {relatedProducts.length > 0 ? (
        relatedProducts.map((related) => (
          <Col xs="12" sm="6" md="4" lg="3" key={related.id} className="mb-3">
            <Card
              className="border-0 shadow-sm"
              style={{
                borderRadius: '8px',
                maxWidth: '300px',
                margin: '0 auto',
              }}
            >
              <Card.Img
                variant="top"
                src={related.imageUrl}
                alt={related.title}
                className="rounded-top"
                style={{
                  objectFit: 'cover',
                  maxHeight: '250px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              />
              <Card.Body style={{ padding: '10px' }}>
                <Card.Title
                  style={{
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    fontSize: '1rem',
                    marginBottom: '5px',
                  }}
                >
                  {related.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: '0.9rem',
                    color: '#2c3e50',
                    marginBottom: '5px',
                  }}
                >
                  <strong>Artista:</strong> {related.artist}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: '0.9rem',
                    color: '#2c3e50',
                    marginBottom: '10px',
                  }}
                >
                  <strong>Precio:</strong> ${related.price}
                </Card.Text>
                <Button
                  variant="info"
                  className="rounded-pill px-2 py-1 shadow-sm"
                  style={{ fontSize: '0.85rem' }}
                  onClick={() => (window.location.href = `/product/${related.id}`)}
                >
                  Ver detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>No hay productos relacionados disponibles.</p>
      )}
    </Row>
  </Col>
</Row>
    </Container>
  );
}

export default Product;
