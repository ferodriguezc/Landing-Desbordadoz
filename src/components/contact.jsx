import React from "react";
import { Button } from 'react-bootstrap';

function Contact() {
  const whatsappNumber = "123456789"; // Reemplaza con el número de WhatsApp de la empresa
  const instagramUrl = "https://www.instagram.com/desbordadoz/?hl=es-la"; // Reemplaza con el URL de Instagram de la empresa

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, "_blank");
  };

  return (
    <div
      id="contact"
      className="text-center"
      style={{
        padding: '50px 0',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '100px', // Espacio para el navbar
        backgroundColor: '#f8f9fa', // Fondo claro
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="section section-title" style={{ marginBottom: '30px' }}>Contáctanos</h2>
        <div className="row" style={{
          display: "flex",
          flexWrap: "nograp",
          alignContent: "center",
          justifyContent: "space-evenly"
        }}>
          <div className="col-md-8 d-flex justify-content-center" style={{
            display: "flex",
            flexWrap: "nograp",
            alignContent: "center",
            justifyContent: "space-evenly"
          }}>
            <Button
              variant="success"
              onClick={handleWhatsAppClick}
              className="m-3"
              style={{
                width: '250px', // Ancho fijo para ambos botones
                padding: '25px 0', // Ajuste de padding
                fontSize: '18px',
                borderRadius: '25px', // Bordes redondeados
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
                transition: '0.3s', // Transición suave
                margin: "10px 0",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'} // Cambia el color al pasar el mouse
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''} // Restaura el color original
            >
              Contactar por WhatsApp
            </Button>
            <Button
              onClick={handleInstagramClick}
              className="m-3"
              style={{
                width: '250px', // Ancho fijo para ambos botones
                padding: '25px 0', // Ajuste de padding
                fontSize: '18px',
                borderRadius: '25px', // Bordes redondeados
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra
                transition: '0.3s', // Transición suave
                backgroundColor: '#E1306C', // Color de Instagram
                color: '#fff', // Color del texto
                margin: "10px 0",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C13584'} // Color al pasar el mouse
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E1306C'} // Restaura el color original
            >
              Visítanos en Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
