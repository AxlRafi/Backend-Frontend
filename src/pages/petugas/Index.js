//import hook useState dan useEffect from react
import { useState, useEffect } from "react";
//import react router dom
import { Link } from "react-router-dom";
//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
//import axios
import axios from "axios";
function IndexPetugas() {
  //define state
  const [workers, setPetugas] = useState([]);
  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);
  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get("http://localhost:3000/api/petugas");
    //get response data
    const data = await response.data.data;
    //assign response data to state "workers"
    setPetugas(data);
  };
  //function "deleteproduk"
  const deletePetugas = async (id) => {
    //sending
    await axios.delete(`http://localhost:3000/api/petugas/delete/${id}`);
    //panggil function "fetchData"
    fectData();
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button
                as={Link}
                to="/petugas/create"
                variant="success"
                className="mb-3"
              >
                TAMBAH PRODUK
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama Petugas</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Level</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker, index) => (
                    <tr key={worker.id}>
                      <td>{index + 1}</td>
                      <td>{worker.nama_petugas}</td>
                      <td>{worker.username}</td>
                      <td>{worker.password}</td>
                      <td>{worker.level}</td>
                      <td className="text-center">
                        <Button
                          as={Link}
                          to={`/petugas/edit/${worker.id_petugas}`}
                          variant="primary"
                          size="sm"
                          className="me-2"
                        >
                          EDIT
                        </Button>
                        <Button
                          onClick={() => deletePetugas(worker.id_petugas)}
                          variant="danger"
                          size="sm"
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default IndexPetugas;
