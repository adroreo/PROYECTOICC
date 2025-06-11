import React, { useEffect, useState } from 'react';
import { Container, Navbar, Table } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">🌡️ Proyecto IoT - Sensores</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Contenido principal */}
      <Container className="mt-4">
        <h2 className="mb-4">Lecturas del Sensor</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha y Hora</th>
              <th>Temperatura (°C)</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="2">Cargando datos...</td>
              </tr>
            ) : (
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.timestamp}</td>
                  <td>{d.temperature}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
