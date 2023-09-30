//import hook useState dan useEffect from react
import { useState, useEffect } from "react";
//import react router dom
import { Link } from "react-router-dom";
//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
//import axios
import axios from "axios";
function IndexProduk() {
  //define state
  const [produks, setProduks] = useState([]);
  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);
  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get("http://localhost:3000/api/produk");
    //get response data
    const data = await response.data.data;
    //assign response data to state "produks"
    setProduks(data);
  };
  //function "deleteproduk"
  const deleteProduk = async (id) => {
    //sending
    await axios.delete(`http://localhost:3000/api/produk/delete/${id}`);
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
                to="/produk/create"
                variant="success"
                className="mb-3"
              >
                TAMBAH PRODUK
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama Produk</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {produks.map((produk, index) => (
                    <tr key={produk.id}>
                      <td>{index + 1}</td>
                      <td>{produk.nama_produk}</td>
                      <td>{produk.deskripsi}</td>
                      <td>{produk.harga}</td>
                      <td className="text-center">
                        <Button
                          as={Link}
                          to={`/produk/edit/${produk.id_produk}`}
                          variant="primary"
                          size="sm"
                          className="me-2"
                        >
                          EDIT
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
export default IndexProduk;
