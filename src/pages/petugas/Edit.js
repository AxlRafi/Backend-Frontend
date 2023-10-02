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
function EditPetugas() {
  //state
  const [nama_petugas, setNama_petugas] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  //state validation
  const [validation, setValidation] = useState({});
  //history
  const history = useHistory();
  //get ID from parameter URL
  const { id } = useParams();
  //hook useEffect
  useEffect(() => {
    //panggil function "getPetugasById"
    getPetugasById();
  }, []); //function "getPetugasById"
  const getPetugasById = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:3000/api/petugas/${id}`);
    //get response data
    const data = await response.data.data;
    //assign data to state
    setNama_petugas(data.nama_petugas);
    setUsername(data.username);
    setPassword(data.password);
    setLevel(data.level);
  };
  //function "updateProduk"
  const updatePetugas = async (e) => {
    e.preventDefault();
    //send data to server
    await axios
      .patch(`http://localhost:3000/api/petugas/update/${id}`, {
        nama_petugas: nama_petugas,
        username: username,
        password: password,
        level: level,
      })
      .then(() => {
        //redirect
        history.push("/petugas");
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
              <Form onSubmit={updatePetugas}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Petugas</Form.Label>
                  <Form.Control
                    type="text"
                    value={nama_petugas}
                    onChange={(e) => setNama_petugas(e.target.value)}
                    placeholder="Masukkan Nama Petugas"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    type="text"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    placeholder="Masukkan Level Anda"
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
export default EditPetugas;
