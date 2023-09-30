//import hook useState from react
import { useState } from "react";
//import component Bootstrap React
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

//import axios
import axios from "axios";
//import hook history dari react router dom
import { useHistory } from "react-router-dom";
function CreateProduk() {
  //state
  const [nama_produk, setNama_produk] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  //state validation
  const [validation, setValidation] = useState({});
  //history
  const history = useHistory();
  //method "storeProduk"
  const storeProduk = async (e) => {
    e.preventDefault();
    //send data to server
    await axios
      .post("http://localhost:3000/api/produk/store", {
        nama_produk: nama_produk,
        deskripsi: deskripsi,
        harga: harga,
      })
      .then(() => {
        //redirect
        history.push("/produk");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md={12}>
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <Alert variant="danger">
                  <ul class="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param}: ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              <Form onSubmit={storeProduk}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Produk</Form.Label>
                  <Form.Control
                    type="text"
                    value={nama_produk}
                    onChange={(e) => setNama_produk(e.target.value)}
                    placeholder="Masukkan Nama Produk"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Deskripsi Produk</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    placeholder="Masukkan Deskripsi Produk"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="text"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    placeholder="Masukkan Harga Produk"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  SIMPAN
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default CreateProduk;
