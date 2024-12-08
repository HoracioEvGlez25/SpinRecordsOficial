import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TocaDiscos from "./tocadiscos";

const PurchaseOrder = ({ carrito = [] }) => {
  const [productosVinilos, setProductosVinilos] = useState([]);
  const [productosTocadiscos, setProductosTocadiscos] = useState([]);
  const [carritoActualizado, setCarritoActualizado] = useState(carrito);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      fetch("/products.json").then((response) => response.json()),
      fetch("/TD.json").then((response) => response.json()),
    ])
      .then(([vinilos, tocadiscos]) => {
        setProductosVinilos(vinilos);
        setProductosTocadiscos(tocadiscos);
      })
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    const carritoModificado = carritoActualizado.map((item) =>
      item.id === id ? { ...item, cantidad } : item
    );
    setCarritoActualizado(carritoModificado);
  };

  useEffect(() => {
    const nuevoTotal = carritoActualizado.reduce((acumulado, item) => {
      let productoDetails = null;

      console.log(item)
      if (item.tipo === "vinilo") {
        productoDetails = productosVinilos.find((p) => p.id === item.id);
      } else if (item.tipo === "tocadisco") {
        productoDetails = productosTocadiscos.find((p) => p.id === item.id);
      }if (!productoDetails) {
        console.error("Producto no encontrado:", item);
        return acumulado;
      }


      console.log("Vinilos: ", productosVinilos);
        console.log("Tocadiscos: ", productosTocadiscos);
      

      const precio = parseFloat(productoDetails.price.replace("$", "").replace(",", "")) || 0;
      return acumulado + precio * (item.cantidad || 1);
    }, 0);

    setTotal(nuevoTotal);
  }, [carritoActualizado, productosVinilos, productosTocadiscos]);

  const handlePayment = () => {
    window.open("https://buy.stripe.com/test_bIYbMs79ZcTU7tuaEF", "_blank");
    navigate("/confirmationpage");
    setCarritoActualizado([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.purchaseOrder}>
        <h2 style={styles.title}>Completar compra</h2>

        {carritoActualizado.length === 0 ? (
          <p style={styles.emptyMessage}>No tienes productos en tu carrito.</p>
        ) : (
          <div>
            {carritoActualizado.map((producto, index) => {
              let productoDetails = null;
              if (producto.tipo === "vinilo") {
                productoDetails = productosVinilos.find((p) => p.id === producto.id);
              } else if (producto.tipo === "tocadisco") {
                productoDetails = productosTocadiscos.find((p) => p.id === producto.id);
              }

              return (
                <div key={index} style={styles.productItem}>
                  {productoDetails && productoDetails.imageUrl && (
                    <img src={productoDetails.imageUrl} alt="Imagen del producto" style={styles.productImage} />
                  )}
                  <div style={styles.productDetails}>
                    <span style={styles.productName}>
                      {productoDetails ? productoDetails.title || productoDetails.name: "Producto no encontrado"}
                    </span>
                    <p className="card-text mb-1 text-secondary">
                      <strong>Precio unitario:</strong>{" "}
                      {productoDetails?.price ? `${productoDetails.price}` : "No disponible"}
                    </p>
                    <p className="card-text mb-1 text-secondary">
                      <strong>Subtotal:</strong>{" "}
                      {productoDetails?.price && producto.cantidad
                        ? `$${(
                          parseFloat(productoDetails.price.replace("$", "").replace(",", "")) *
                          producto.cantidad
                        ).toFixed(2)}`
                        : "No disponible"}
                    </p>
                    <div style={styles.quantitySection}>
                      <input
                        type="number"
                        value={producto.cantidad || 1}
                        min="1"
                        style={styles.inputCantidad}
                        onChange={(e) =>
                          actualizarCantidad(producto.id, parseInt(e.target.value))
                        }
                      />
                      <span>Cantidad</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div style={styles.totalSection}>
              <h3 style={styles.totalText}>Total: ${total.toFixed(2)}</h3>
            </div>

            <div style={styles.paymentSection}>
              <button onClick={handlePayment} style={styles.paymentButton}>
                Pagar con Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  purchaseOrder: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textTransform: "uppercase",
    color: "#333",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#777",
  },
  productItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
  productImage: {
    width: "100px",
    height: "100px",
    marginRight: "20px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  quantitySection: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
  inputCantidad: {
    width: "50px",
    marginRight: "10px",
    textAlign: "center",
  },
  totalSection: {
    textAlign: "center",
    marginTop: "20px",
  },
  totalText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  paymentSection: {
    textAlign: "center",
    marginTop: "20px",
  },
  paymentButton: {
    backgroundColor: "#6772E5",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PurchaseOrder;
