import React, { useEffect, useState } from 'react';
import { Container, Card, Badge } from 'react-bootstrap';
import GraphLinea from '../components/GraphLinea';


function RescueBot() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:5000/api/rescue')
        .then(res => res.json())
        .then(d => setData(prev => [...prev.slice(-9), d]));
    }, 3000); // cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  if (data.length === 0) return <Container><p>Cargando datos...</p></Container>;

  const last = data[data.length - 1];

  return (
    <Container className="mt-4">
      <h2>🚑 Mouse de Rescate</h2>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Temperatura: {last.temperatura} °C</Card.Title>
          <Card.Text>Distancia: {last.distancia} cm</Card.Text>
          <Card.Text>
            Persona detectada:{" "}
            {last.persona_detectada
              ? <Badge bg="success">¡Sí!</Badge>
              : <Badge bg="secondary">No</Badge>}
          </Card.Text>
          <Card.Text>Ubicación: (x: {last.ubicacion.x}, y: {last.ubicacion.y})</Card.Text>
          <Card.Text>Estado: <strong>{last.estado}</strong></Card.Text>
        </Card.Body>
      </Card>
<h5>Gráfico de temperatura</h5>
<GraphLinea
  datos={data}
  label="Temperatura (°C)"
  campo="temperatura"
  color="red"
/>
    </Container>
  );
}

export default RescueBot;
