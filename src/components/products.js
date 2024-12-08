import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function Product({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [rating, setRating] = useState(0);

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

  if (!product) {
    return <div className="text-center mt-5">Cargando detalles del producto...</div>;
  }

  return (
    <Container className="my-5 p-4 rounded shadow" style={{ backgroundColor: '#fdfdfd' }}>
      <Row className="align-items-center">
        <Col md="6" className="text-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md="6">
          <Card className="border-0 shadow-sm" style={{ backgroundColor: '#ffffff' }}>
            <Card.Body>
              <Card.Title className="mb-4" style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#2c3e50' }}>
                {product.title}
              </Card.Title>
              <Card.Text className="mb-2">
                <strong>Artista:</strong> {product.artist}
              </Card.Text>
              <Card.Text className="mb-3">
                <strong>Precio:</strong> <span style={{ fontSize: '1.5rem', color: '#28a745' }}>${product.price}</span>
              </Card.Text>
              <Card.Text>
                <strong>Descripción:</strong> {product.description}
              </Card.Text>
              <div className="mt-4">
                <h5>Califica este producto:</h5>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <Button
                  variant="outline-dark"
                  className="rounded-pill px-3 shadow-sm"
                  onClick={() => addToWishlist(product)}
                >
                  Agregar a Wishlist
                </Button>
                <Button
                  variant="success"
                  className="rounded-pill px-3 shadow-sm"
                  onClick={() => addToCart(product)}
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
        <h2>Reseñas</h2>
          <Image
            src="/Reseñas.png" 
            alt="Imagen adicional"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h4 className="mb-4" style={{ fontWeight: 'bold', color: '#2c3e50' }}>Te podría interesar</h4>
          <Row>
            {relatedProducts.length > 0 ? (
              relatedProducts.map((related) => (
                <Col md="4" key={related.id} className="mb-4">
                  <Card className="border-0 shadow-sm" style={{ borderRadius: '10px' }}>
                    <Card.Img
                      variant="top"
                      src={related.imageUrl}
                      alt={related.title}
                      className="rounded-top"
                      style={{ objectFit: 'cover', maxHeight: '200px' }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: 'bold', color: '#2c3e50' }}>{related.title}</Card.Title>
                      <Card.Text><strong>Artista:</strong> {related.artist}</Card.Text>
                      <Card.Text><strong>Precio:</strong> ${related.price}</Card.Text>
                      <Button
                        variant="info"
                        className="rounded-pill px-3 shadow-sm"
                        onClick={() => window.location.href = `/product/${related.id}`}
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
