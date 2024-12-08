    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';

    function Home() {
        return (
            <div className="container mt-5">

                <header className="text-center mb-5">
                    <h1 className="display-4 font-weight-bold">Bienvenido a nuestra Tienda</h1>
                    <p className="lead text-muted">Descubre los productos más vendidos y las mejores ofertas.</p>
                </header>

                <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/BC.jpg" alt="First slide" style={{ height: '300px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/MLIRRR.jpg" alt="Second slide" style={{ height: '300px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/G.jpg" alt="Third slide" style={{ height: '300px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                    </ol>
                </div>

                <section>
                    <h2 className="text-center mb-4">Productos Destacados</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="/BC.jpg" className="card-img-top" alt="Producto 1" style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Blur</h5>
                                    <p className="card-text">El álbum homónimo de Blur, lanzado en 1997, presentó un sonido más crudo y experimental, alejándose del Britpop que los había hecho famosos. Incluye 'Song 2', conocido por su energía y su famoso grito 'Woo-hoo!', asi como Beetlebum la mejor canción de la historia.</p>
                                    <p className="text-primary font-weight-bold">$300.00</p>
                                    <button className="btn btn-primary">Agregar al Carrito</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="/MLIRRR.jpg" className="card-img-top" alt="Producto 2" style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Modern Life is Rubbish</h5>
                                    <p className="card-text">El segundo álbum de estudio de Blur, lanzado en 1993, marcó el comienzo del sonido Britpop que definiría su carrera. Con influencias del rock británico de los años 60, este álbum es una crítica al estilo de vida moderno. Canciones destacadas incluyen 'Coping' y 'Popscene'.</p>
                                    <p className="text-primary font-weight-bold">$200.00</p>
                                    <button className="btn btn-primary">Agregar al Carrito</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="/G.jpg" className="card-img-top" alt="Producto 3" style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Gorillaz</h5>
                                    <p className="card-text">Este es el álbum debut de la banda virtual Gorillaz, lanzado en 2001. Mezcla géneros como el hip hop, rock y electrónica, con éxitos como 'Clint Eastwood' y '5/4'. La banda fue creada por Damon Albarn de Blur y el artista Jamie Hewlett a principios del siglo.</p>
                                    <p className="text-primary font-weight-bold">$300.00</p>
                                    <button className="btn btn-primary">Agregar al Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <h2 className="text-center mb-4" style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 5px #000' }}>
            Nuevos Productos
        </h2>
        <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                    <img src="/Romance.jpg" className="card-img-top" alt="Producto 1" style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: '#FFD700' }}>Romance</h5>
                        <p className="card-text">Lanzado en 2024, 'Romance' combina letras poéticas y un sonido post-punk característico. Canciones como 'Starbuster', o 'Desire' destacan la evolución de la banda hacia un estilo más melódico.</p>
                        <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$350.00</p>
                        <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                    <img src="/OKC.jpg" className="card-img-top" alt="Producto 2" style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: '#FFD700' }}>OK Computer</h5>
                        <p className="card-text">Lanzado en 1997, 'OK Computer' es uno de los álbumes más aclamados de Radiohead, explorando temas como el aislamiento tecnológico y la alienación moderna. Incluye éxitos como 'Paranoid Android' y 'Karma Police'</p>
                        <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$350.00</p>
                        <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                    <img src="/black sabbath.jpg" className="card-img-top" alt="Producto 3" style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: '#FFD700' }}>Black Sabbath</h5>
                        <p className="card-text">Lanzado en 1970, este álbum debut de Black Sabbath es considerado el inicio del heavy metal. Con canciones como 'Black Sabbath' y 'The Wizard', el disco marcó un antes y un después en la historia del rock.</p>
                        <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$300.00</p>
                        <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <p></p>

    <section style={{ backgroundColor: '#1e1e2f', padding: '50px 0' }}>
  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
    <h2 style={{ color: '#FFC107', fontWeight: 'bold', fontSize: '2.5rem', letterSpacing: '1px' }}>PROMOCIONES</h2>
  </div>

  <div
    className="container"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    }}
  >
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="card"
        style={{
          flex: '1 1 calc(33.333% - 20px)',
          maxWidth: '350px',
          border: '1px solid #FFC107',
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundColor: '#2b2b3c',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
        }}
      >
        <img
          src={`/${index === 0 ? 'TTTT.jpg' : index === 1 ? 'CP.jpg' : 'TNAA.jpg'}`}
          className="card-img-top"
          alt={`Producto ${index + 1}`}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            borderBottom: '4px solid #FFC107',
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ color: '#FFC107', fontWeight: 'bold' }}>
            {index === 0 ? 'Tocadiscos Clásico' : index === 1 ? 'Aprovecha' : 'The New Abnormal'}
          </h5>
          <p className="card-text" style={{ color: '#ccc' }}>
            {index === 0
              ? 'Technics -- Semi-automático'
              : index === 1
              ? 'Envío gratis en tu primera compra, que estas esperendo, ve nuestra coleccion de vinilos y escoge tu favorito:))'
              : "Lanzado en 2020, 'The New Abnormal' es el sexto álbum de estudio de The Strokes."}
          </p>
          {index === 0 || index === 2 ? (
            <p className="text-primary font-weight-bold" style={{ fontSize: '1.5rem' }}>
              {index === 0 ? '$1500.00' : '$300.00'}
            </p>
          ) : null}
          <button
            className={`btn ${index === 1 ? 'btn-success' : 'btn-warning'}`}
            style={{ margin: '5px', borderRadius: '25px', fontWeight: 'bold' }}
          >
            {index === 1 ? 'Usar cupón' : `${index === 0 ? '30%' : '20%'} Descuento`}
          </button>
          {index === 0 || index === 2 ? (
            <button className="btn btn-primary" style={{ margin: '5px', borderRadius: '25px', fontWeight: 'bold' }}>
              Agregar al Carrito
            </button>
          ) : null}
        </div>
      </div>
    ))}
  </div>
</section>
<section style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
  <div
    className="container"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    }}
  >
    <div
      className="card shadow-sm"
      style={{
        flex: '1 1 calc(33.333% - 20px)',
        maxWidth: '350px',
        border: '1px solid #000000',
        borderRadius: '15px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h5 style={{ color: '#FFC107', fontWeight: 'bold', fontSize: '1.5rem' }}>3 meses sin intereses</h5>
      <p style={{ color: '#6c757d', fontSize: '1rem', marginTop: '10px' }}>
        En compras superiores a $599 válido en <strong>Stripe</strong>.
      </p>
    </div>


    <div
      className="card shadow-sm"
      style={{
        flex: '1 1 calc(33.333% - 20px)',
        maxWidth: '350px',
        border: '1px solid #000000',
        borderRadius: '15px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h5 style={{ color: '#FFC107', fontWeight: 'bold', fontSize: '1.5rem' }}>Medios de pago</h5>
      <p style={{ color: '#6c757d', fontSize: '1rem', marginTop: '10px' }}>
        • Stripe  • Tarjetas de crédito/débito • Aplazo
      </p>
    </div>

    <div
      className="card shadow-sm"
      style={{
        flex: '1 1 calc(33.333% - 20px)',
        maxWidth: '350px',
        border: '1px solid #000000',
        borderRadius: '15px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h5 style={{ color: '#FFC107', fontWeight: 'bold', fontSize: '1.5rem' }}>Devoluciones Gratuitas</h5>
      <p style={{ color: '#6c757d', fontSize: '1rem', marginTop: '10px' }}>
        Tienes <strong>10 días naturales</strong> para hacer un cambio o devolución. Aplican restricciones.
      </p>
    </div>
  </div>
</section>

<section
    className="mb-5 py-5"
    style={{
        background: "linear-gradient(135deg, #f0f8ff, #e6f7ff)",
        borderRadius: "10px",
        padding: "50px 20px",
    }}
>
    <h2
        className="text-center mb-4"
        style={{
            color: "#241b80",
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: "1px",
        }}
    >
        Lo que dicen nuestros clientes
    </h2>
    <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderRadius: "8px",
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
            >
                <div className="card-body text-center" style={{ padding: "30px 20px" }}>
                    <p
                        className="card-text"
                        style={{
                            fontSize: "1.2rem",
                            color: "#333",
                            fontStyle: "italic",
                        }}
                    >
                        "Gran calidad de productos y servicio, siempre mi tienda favorita
                        para encontrar vinilos raros."
                    </p>
                    <footer
                        className="blockquote-footer mt-3"
                        style={{ fontSize: "0.9rem", color: "#6c757d" }}
                    >
                        Juan Pérez
                    </footer>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderRadius: "8px",
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                        "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
            >
                <div className="card-body text-center" style={{ padding: "30px 20px" }}>
                    <p
                        className="card-text"
                        style={{
                            fontSize: "1.2rem",
                            color: "#333",
                            fontStyle: "italic",
                        }}
                    >
                        "Me encanta la variedad que tienen, siempre encuentro algo que me
                        gusta. ¡Muy recomendado!"
                    </p>
                    <footer
                        className="blockquote-footer mt-3"
                        style={{ fontSize: "0.9rem", color: "#6c757d" }}
                    >
                        María García
                    </footer>
                </div>
            </div>
        </div>
    </div>
</section>     
</div>
        );
    }

    export default Home;
