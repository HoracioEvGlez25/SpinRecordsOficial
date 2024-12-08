import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function DetailsTD({ addToCart }) {
  const { id } = useParams();
  const [tocadisco, setProduct] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch('/TD.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((error) => console.error('Error al cargar el producto:', error));
  }, [id]);

  if (!tocadisco) {
    return <div className="text-center mt-5">Cargando detalles del producto...</div>;
  }

  return (
    <Container
      className="my-5 p-4"
      style={{
        background: 'linear-gradient(135deg, #ffffff, #f7f9fc)',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image
            src={tocadisco.imageUrl}
            alt={tocadisco.name}
            className="img-fluid rounded"
            style={{
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              border: '3px solid #e9ecef',
              borderRadius: '15px',
            }}
          />
        </Col>
        <Col md="6">
          <Card
            className="border-0"
            style={{
              backgroundColor: '#fdfdfd',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
          >
            <Card.Body>
              <Card.Title
                as="h2"
                style={{ fontWeight: 'bold', color: '#343a40', marginBottom: '15px' }}
              >
                {tocadisco.name}
              </Card.Title>
              <Card.Text style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                <strong>Marca:</strong> {tocadisco.brand}
              </Card.Text>
              <Card.Text style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                <strong>Precio:</strong>{' '}
                <span style={{ fontWeight: 'bold', color: '#28a745' }}>{tocadisco.price}</span>
              </Card.Text>
              <Card.Text style={{ fontSize: '1rem', color: '#6c757d' }}>
                <strong>Tipo:</strong> {tocadisco.type}
              </Card.Text>
              <div className="mt-4">
                <h5 style={{ fontWeight: 'bold', color: '#495057' }}>Califica este producto:</h5>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <Button
                  variant="outline-secondary"
                  style={{
                    borderRadius: '20px',
                    fontWeight: '500',
                    padding: '10px 20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => alert('Agregar a lista de deseos')}
                >
                  Lista de deseos
                </Button>
                <Button
                  variant="success"
                  style={{
                    borderRadius: '20px',
                    fontWeight: '500',
                    padding: '10px 20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={() => addToCart(tocadisco)}
                >
                  Agregar al Carrito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <Image
            src="/Reseñas2.png" 
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
    </Container>
  );
}

export default DetailsTD;
