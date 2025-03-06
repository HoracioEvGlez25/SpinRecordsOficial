import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

    function Home() {
        return (
            <div className="container mt-5">

                <header className="text-center mb-5">
                    <h1 className="display-4 font-weight-bold">Bienvenido a Spin Records</h1>
                    <p className="lead text-muted">Descubre los productos más vendidos y las mejores ofertas.</p>
                </header>

                <div id="carouselExampleControls" className="carousel slide mb-5 shadow-lg" data-ride="carousel" style={{ borderRadius: '10px', overflow: 'hidden' }}>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="/IR.png" alt="First slide" style={{ height: '400px', objectFit: 'cover', filter: 'brightness(90%)' }} />
            <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: '#FFD700', fontSize: '1.8rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>In Rainbows</h5>
                <p style={{ fontSize: '1rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}></p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="/TMW.jpg" alt="Second slide" style={{ height: '400px', objectFit: 'cover', filter: 'brightness(90%)' }} />
            <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: '#FFD700', fontSize: '1.8rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>The Magic Whip</h5>
                <p style={{ fontSize: '1rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}></p>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="/LiveatR.jpg" alt="Third slide" style={{ height: '400px', objectFit: 'cover', filter: 'brightness(90%)' }} />
            <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: '#FFD700', fontSize: '1.8rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>Live al Royal Hall</h5>
                <p style={{ fontSize: '1rem', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}></p>
            </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
        <span className="sr-only">Anterior</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
        <span className="sr-only">Siguiente</span>
    </a>
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" className="active" style={{ backgroundColor: '#FFD700' }}></li>
        <li data-target="#carouselExampleControls" data-slide-to="1" style={{ backgroundColor: '#FFD700' }}></li>
        <li data-target="#carouselExampleControls" data-slide-to="2" style={{ backgroundColor: '#FFD700' }}></li>
    </ol>
</div>

<section style={{ padding: '50px 0', backgroundColor: '#e6e6dd' }}>
    <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#131317' }}>Productos Destacados</h2>
    <div className="container">
        <div className="row justify-content-center">
            {/* Producto 1 */}
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#2b2b3c', color: 'white' }}>
                    <img src="/Humbug.jpg" className="card-img-top" alt="Producto 1" style={{ height: '350px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: '#FFD700' }}>Humbug</h5>
                        <p className="card-text">Lanzado el 19 de agosto de 2009 por Domino Records. 'Humbug' es el tercer álbum de Arctic Monkeys, el cual marca un cambio en el sonido de la banda, incorporando elementos de rock psicodélico, rock duro, rock stoner y rock del desierto, en lugar de su estilo anterior influenciado por el rock garage y el punk. El álbum incluye éxitos como 'Crying Lightning' y 'Cornerstone'.</p>
                        <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$600.00</p>
                        <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            {/* Producto 2 */}
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#2b2b3c', color: 'white' }}>
                    <img src="/JD.jpg" className="card-img-top" alt="Producto 2" style={{ height: '350px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: '#FFD700' }}>Best of</h5>
                        <p className="card-text">'The Best of Joy Division' es un álbum recopilatorio de la banda británica Joy Division, lanzado en 2008. Este disco reúne algunas de las canciones más emblemáticas de la banda, ofreciendo una visión integral de su breve pero influyente carrera en la escena del post-punk.
El álbum incluye temas destacados como 'Love Will Tear Us Apart', 'Transmission', 'She's Lost Control', y 'Atmosphere'. </p>
                        <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$740.00</p>
                        <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            {/* Producto 3 */}
            <div className="col-md-4 mb-4">
                <div className="card shadow-sm" style={{ backgroundColor: '#2b2b3c', color: 'white' }}>
                    <img src="/ThinkTank.jpg" className="card-img-top" alt="Producto 3" style={{ height: '350px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: '#FFD700' }}>Think Tank</h5>
                        <p className="card-text">El séptimo álbum de estudio de Blur, lanzado en 2003, muestra un sonido más experimental con influencias de la música electrónica, hip hop, jazz y africana, reflejando los intereses musicales en expansión de Damon Albarn. Es conocido por su ambiente introspectivo y la ausencia de Graham Coxon en la mayoría de las grabaciones. Canciones destacadas incluyen 'Out of Time' y 'Crazy Beat'.</p>
                        <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$300.00</p>
                        <button className="btn btn-primary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<p></p>
<section style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
    <h2 className="text-center mb-4" style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 5px #000' }}>
        NOVEDADES
    </h2>

    <div className="container mt-5">
        <div className="text-center mb-4"> 
            <h2 className="text-center mb-5" style={{ fontSize: '', fontWeight: 'bold', color: '#FFFF' }}>Ahora puedes pedir el vinilo que más te guste - ¡Que esperas consigue tu favorito!</h2>
        </div>
    </div>

{/* Sección para realizar un pedido personalizado */}
<div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-7">
            <div className="card shadow-lg p-4" style={{ backgroundColor: '#1c1c1c', color: 'white', borderRadius: '12px', border: '1px solid #FFFF' }}>
                <h3 className="text-center mb-3" style={{ color: '#FFF', fontWeight: 'bold' }}>
                    ¿No encuentras el álbum que buscas?
                </h3>
                <p className="text-center" style={{ fontSize: '1.1rem', color: '#FFF' }}>
                    Solicita cualquier vinilo y nosotros lo conseguimos por ti.
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="albumName" className="form-label" style={{ fontWeight: 'bold', color: '#FFF' }}>Nombre del álbum</label>
                        <input type="text" className="form-control" 
                            id="albumName" 
                            placeholder="Ingresa el nombre del álbum" required style={{ backgroundColor: '#1f1f1f', border: '1px solid #FFFF', color: 'white', borderRadius: '8px', padding: '10px' }} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="artistName" className="form-label" style={{ fontWeight: 'bold', color: '#FFF' }}>Nombre del artista</label>
                        <input type="text" className="form-control" 
                          id="artistName" 
                          placeholder="Ingresa el nombre del artista" required style={{ backgroundColor: '#1f1f1f', border: '1px solid #FFF', color: 'white', borderRadius: '8px', padding: '10px' }} 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn w-100" style={{ background: ' #000080', color: 'white', fontWeight: 'bold', padding: '12px', transition: 'transform 0.2s ease-in-out'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        <i className="fas fa-record-vinyl"></i> Solicitar Álbum
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<p></p>
<h2 className="text-center mb-4" style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 5px #000' }}>
        Nuevos productos 
    </h2>
    <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                <img src="/Romance.jpg" className="card-img-top" alt="Producto 1" style={{ height: '350px', objectFit: 'cover' }} />
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
                <img src="/OKC.jpg" className="card-img-top" alt="Producto 2" style={{ height: '350px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: '#FFD700' }}>OK Computer</h5>
                    <p className="card-text">Lanzado en 1997, 'OK Computer' es uno de los álbumes más aclamados de Radiohead, explorando temas como el aislamiento tecnológico y la alienación moderna. Incluye éxitos como 'Paranoid Android' y 'Karma Police'.</p>
                    <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$350.00</p>
                    <button className="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                <img src="/WPSITWIN.jpg" className="card-img-top" alt="Producto 3" style={{ height: '350px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: '#FFD700' }}>Whatever People Say I Am, That's What I'm Not</h5>
                    <p className="card-text">Lanzado en 2006, 'Whatever People Say I Am, That's What I'm Not'. Incluye éxitos como 'I Bet You Look Good on the Dancefloor', 'When the Sun Goes Down' y 'Mardy Bum'.</p>
                    <p className="text-primary font-weight-bold" style={{ color: '#00FF00' }}>$350.00</p>
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
          src={`/${index === 0 ? 'TDM.jpg' : index === 1 ? 'CP.jpg' : 'TC.jpeg'}`}
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
            {index === 0 ? 'Tocadiscos Moderno' : index === 1 ? 'Aprovecha' : 'The Car'}
          </h5>
          <p className="card-text" style={{ color: '#ccc' }}>
            {index === 0
              ? 'Technics -- Automático'
              : index === 1
              ? 'Envío gratis en tu primera compra, que estas esperendo, ve nuestra coleccion de vinilos y escoge tu favorito:))'
              : "Lanzado en 2022, 'The Car' es el septimo álbum de estudio de Arctic Monkeys."}
          </p>
          {index === 0 || index === 2 ? (
            <p className="text-primary font-weight-bold" style={{ fontSize: '1.5rem' }}>
              {index === 0 ? '$1800.00' : '$780.00'}
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
      <h5 style={{ color: '#060270', fontWeight: 'bold', fontSize: '1.5rem' }}>3 meses sin intereses</h5>
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
      <h5 style={{ color: '#060270', fontWeight: 'bold', fontSize: '1.5rem' }}>Medios de pago</h5>
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
      <h5 style={{ color: '#060270', fontWeight: 'bold', fontSize: '1.5rem' }}>Devoluciones Gratuitas</h5>
      <p style={{ color: '#6c757d', fontSize: '1rem', marginTop: '10px' }}>
        Tienes <strong>10 días naturales</strong> para hacer un cambio o devolución. Aplican restricciones.
      </p>
    </div>
  </div>
</section>

<section
    className="mb-5 py-5"
    style={{
        background: "linear-gradient(135deg,rgb(230, 240, 247),rgb(249, 242, 242))",
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

<div className="container mt-5">
  <h2
    className="text-center mb-4"
    style={{
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#000',
      borderBottom: '2px solid #000',
      paddingBottom: '0.5rem',
    }}
  >
    Producto más vendido del mes 1#
  </h2>
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
    style={{ maxWidth: '600px', margin: '0 auto' }}
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
      ></button>
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="/LiveatW.jpg"
          className="d-block w-100"
          alt="Imagen 1"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="/LAW.jpg"
          className="d-block w-100"
          alt="Imagen 2"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </div>
      <div className="carousel-item">
        <img
          src="/GCx.jpeg"
          className="d-block w-100"
          alt="Imagen 3"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </div>
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
    </button>
  </div>
</div>

<div className="container mt-5">
  <div className="text-center mb-4">
    <h2 style={{ color: 'goldenrod' }}>¡Únete a nuestra Newsletter!</h2>
    <p>Recibe las últimas noticias y promociones directamente en tu correo.</p>
  </div>
  <form className="row justify-content-center">
    <div className="col-md-6">
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Ingresa tu correo electrónico"
      />
    </div>
    <div className="col-md-2">
      <button type="submit" className="btn btn-warning w-100">
        Suscribirme
      </button>
    </div>
  </form>
</div>


</div>
        );
    }
    
export default Home;
