import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <h1 className="mb-3">Bienvenido al Proyecto IoT</h1>
      <p>
        Este proyecto fue desarrollado para el curso <strong>Cognitive Computing</strong>. 
        Tiene como objetivo la implementación de soluciones IoT conectadas a la nube mediante AWS EC2.
      </p>

      <p><strong>Integrantes:</strong> Adrian Bejarano, Diego Gaspar</p>

      <hr className="my-4" />

      <h3>Implementaciones del proyecto</h3>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://cdn.hackaday.io/images/6594261671964424821.png" />
            <Card.Body>
              <Card.Title>🌞 Solar Tracker (panel de seguimiento)</Card.Title>
              <Card.Text>
                Sistema dual-axis con 4 sensores LDR y 2 servomotores que sigue la posición del sol automáticamente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://circuitdigest.com/sites/default/files/projectimage_mic/thermal-sensor-arduino-project-thumbnail.jpg" />
            <Card.Body>
              <Card.Title>🚑 Mouse de Rescate</Card.Title>
              <Card.Text>
                Vehículo térmico autónomo que detecta presencia humana mediante sensores de temperatura y ultrasonido.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
