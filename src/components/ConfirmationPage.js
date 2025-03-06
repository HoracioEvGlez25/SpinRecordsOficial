import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStore, FaShoppingCart, FaTruck } from "react-icons/fa"; // Importamos íconos

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2
        className="text-center mb-4"
        style={styles.title}
      >
        Gracias por comprar en Spin Records
      </h2>
      <p style={styles.message}>
        Tu transacción ha sido exitosa. Haz clic en uno de los botones para continuar.
      </p>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate("/")} style={styles.button}>
          <FaStore style={styles.icon} /> Volver a la tienda
        </button>
        <button onClick={() => navigate("/PurchaseOrder")} style={styles.button}>
          <FaShoppingCart style={styles.icon} /> Volver a comprar
        </button>
        <button onClick={() => navigate("/PurchaseTracking")} style={styles.button}>
          <FaTruck style={styles.icon} /> Ver seguimiento de la compra
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#000",
    borderBottom: "2px solid #000",
    paddingBottom: "0.5rem",
    fontSize: "24px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    color: "#777",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "10px 20px",
    backgroundColor: "#060270",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  icon: {
    fontSize: "20px",
  },
};

export default ConfirmationPage;
