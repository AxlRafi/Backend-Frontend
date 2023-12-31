//import hook useState dan useEffect from react
import { useState, useEffect } from "react";
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
//import hook history dan params dari react router dom
import { useHistory, useParams } from "react-router-dom";
function EditProduk() {
  //state
  const [nama_produk, setNama_produk] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  //state validation
  const [validation, setValidation] = useState({});
  //history
  const history = useHistory();
  //get ID from parameter URL
  const { id } = useParams();
  //hook useEffect
  useEffect(() => {
    //panggil function "getProdukById"
    getProdukById();
  }, []); //function "getProdukById"
  const getProdukById = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:3000/api/produk/${id}`);
    //get response data
    const data = await response.data.data;
    //assign data to state
    setNama_produk(data.nama_produk);
    setDeskripsi(data.deskripsi);
    setHarga(data.harga);
  };
  //function "updateProduk"
  const updateProduk = async (e) => {
    e.preventDefault();
    //send data to server
    await axios
      .patch(`http://localhost:3000/api/produk/update/${id}`, {
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
        <Col md="{12}">
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
              <Form onSubmit={updateProduk}>
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
                  UPDATE
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default EditProduk;
