import React from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { FaCcVisa, FaCcMastercard, FaCcStripe, FaPaypal, FaUniversity } from "react-icons/fa";

function ShoppingCart({ cartItems, removeFromCart, updateQuantity }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "USD" }).format(amount);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0; 
      return acc + price * item.quantity;
    }, 0);
  };

  const shippingCost = 50.0;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Carrito de Compras</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <p className="text-center">El carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <Card className="mb-3 shadow-sm" key={item.id}>
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={item.imageUrl || "https://via.placeholder.com/150"}
                      alt={item.title}
                      style={{ width: "80%", height: "auto" }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>Precio: {formatCurrency(item.price)}</Card.Text>
                      <Card.Text>
                        Cantidad:
                        <Form.Control
                          type="number"
                          value={item.quantity}
                          min="1"
                          className="w-25 d-inline-block"
                          onChange={(e) => {
                            const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
                            updateQuantity(item.id, newQuantity);
                          }}
                        />
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Quitar ${item.title}`}
                      >
                        Quitar
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Resumen del Pedido</Card.Title>
              <Card.Text>Subtotal: {formatCurrency(subtotal)}</Card.Text>
              <Card.Text>Envío: {formatCurrency(shippingCost)}</Card.Text>
              <h5>Total: {formatCurrency(total)}</h5>
              <Button variant="success" className="w-100">
                Realizar Compra
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
