import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStore, FaShoppingCart, FaShippingFast } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PurchaseTracking = () => {
  const navigate = useNavigate();

  const order = {
    id: "25",
    customerId: "354",
    orderDate: "2024-12-08",
    total: 300,
    paymentMethodId: "Stripe",
    promotions: false,
  };

  const productState = "Por enviar"; 

  const stateIcons = {
    "Por enviar": <FaShippingFast color="#FFA500" size={24} />, // Naranja
    Enviado: <FaShippingFast color="#007BFF" size={24} />, // Azul
    Entregado: <FaShippingFast color="#28A745" size={24} />, // Verde
    Cancelado: <FaShippingFast color="#DC3545" size={24} />, // Rojo
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#333",
          borderBottom: "3px solid #6772E5",
          paddingBottom: "10px",
          marginBottom: "20px",
          fontSize: "24px",
        }}
      >
        Seguimiento de tu Compra
      </h2>

      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
          padding: "20px",
          textAlign: "left",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <img
          src="/BC.jpg"
          alt="Producto"
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "12px",
            marginRight: "20px",
          }}
        />

        <div style={{ flex: 1 }}>
          <p
            style={{
              margin: "10px 0",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <strong style={{ color: "#333" }}>ID de Compra:</strong> {order.id}
          </p>
          <p
            style={{
              margin: "10px 0",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <strong style={{ color: "#333" }}>ID del Cliente:</strong> {order.customerId}
          </p>
          <p
            style={{
              margin: "10px 0",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <strong style={{ color: "#333" }}>Fecha de la Orden:</strong> {order.orderDate}
          </p>
          <p
            style={{
              margin: "10px 0",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <strong style={{ color: "#333" }}>Total:</strong> ${order.total.toFixed(2)}
          </p>
          <p
            style={{
              margin: "10px 0",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <strong style={{ color: "#333" }}>Método de Pago:</strong> {order.paymentMethodId}
          </p>
          <p
            style={{
              margin: "10px 0",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <strong style={{ color: "#333" }}>Promoción Aplicada:</strong> {order.promotions ? "Sí" : "No"}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "15px",
          padding: "15px 20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          border: `2px solid ${stateIcons[productState] ? "#ccc" : "#ccc"}`,
        }}
      >
        {stateIcons[productState]}
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Estado del Producto: {productState}
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            backgroundColor: "#6772E5",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5463c5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#6772E5")}
        >
          <AiOutlineArrowLeft size={20} /> Volver a la tienda
        </button>

        <button
          onClick={() => navigate("/PurchaseOrder")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            backgroundColor: "#34a853",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2a8c44")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#34a853")}
        >
          <FaShoppingCart size={20} /> Realizar otra compra
        </button>
      </div>
    </div>
  );
};

export default PurchaseTracking;
