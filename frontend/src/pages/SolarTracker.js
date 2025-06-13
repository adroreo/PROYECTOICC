import React, { useEffect, useState } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import GraphLinea from '../components/GraphLinea';

function SolarTracker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:5000/api/solar')  // ⚠️ Cambia por tu IP pública en producción
        .then(res => res.json())
        .then(d => {
          setData(prev => [...prev.slice(-9), d]);  // Guarda hasta 10 últimos datos
        });
    }, 3000);  // Cada 3 segundos

    return () => clearInterval(interval); // Limpieza
  }, []);

  if (data.length === 0) {
    return <Container><p>Cargando datos del solar tracker...</p></Container>;
  }

  const last = data[data.length - 1];  // Último dato recibido

  return (
    <Container className="mt-4">
      <h2>🌞 Seguimiento Solar</h2>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Intensidad solar promedio: {last.intensidad}</Card.Title>
          <Card.Text>Estado: <strong>{last.estado}</strong></Card.Text>
          <Card.Text>Ángulo servo X: {last.servoX}°, servo Y: {last.servoY}°</Card.Text>
        </Card.Body>
      </Card>

      <h5>Lecturas de sensores LDR</h5>
      <Table striped bordered>
        <thead>
          <tr>
            <th>LDR 1</th>
            <th>LDR 2</th>
            <th>LDR 3</th>
            <th>LDR 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {last.ldrs.map((val, i) => <td key={i}>{val}</td>)}
          </tr>
        </tbody>
      </Table>

      <h5 className="mt-4">Gráfico de intensidad solar</h5>
      <GraphLinea
        datos={data}
        label="Intensidad solar"
        campo="intensidad"
        color="orange"
      />
    </Container>
  );
}

export default SolarTracker;
