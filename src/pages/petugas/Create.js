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
function CreatePetugas() {
  //state
  const [nama_petugas, setNama_petugas] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  //state validation
  const [validation, setValidation] = useState({});
  //history
  const history = useHistory();
  //method "storePetugas"
  const storePetugas = async (e) => {
    e.preventDefault();
    //send data to server
    await axios
      .post("http://localhost:3000/api/petugas/store", {
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
              <Form onSubmit={storePetugas}>
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
                    placeholder="MAsukkan Username"
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
export default CreatePetugas;
