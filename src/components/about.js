import React from 'react';

function About() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="text-center bg-white p-4 rounded shadow" style={{ maxWidth: '700px' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/LogoSpinRecords.png`}
                    alt="Logo Spin Records"
                    className="img-fluid mb-4"
                    style={{ width: '200px', height: 'auto' }}
                />

                <h1 className="display-5 fw-bold text-primary mb-3">Bienvenido a Spin Records</h1>

                <p className="text-secondary fs-5 mb-3">
                    Fundamos Spin Records en 2024 con la misión de ofrecer una experiencia única para los amantes de la música y los vinilos.
                </p>

                <p className="text-secondary fs-5 mb-3">
                    En Spin Records, nos dedicamos a seleccionar cuidadosamente una colección diversa de discos de vinilo principalmente enfocada en todos los subgéneros del rock.
                </p>

                <p className="text-secondary fs-5">
                    Visítanos y sumérgete en el sonido auténtico y la calidad excepcional que solo el vinilo puede ofrecer.
                </p>

                <div className="mt-4">
                    <a href="/catalog" className="btn btn-primary btn-lg me-2 shadow-sm">
                        Explorar Catálogo
                    </a>
                    <a href="/contacto" className="btn btn-outline-secondary btn-lg shadow-sm">
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
