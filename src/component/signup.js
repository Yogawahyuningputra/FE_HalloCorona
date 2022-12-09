import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, NavLink, Modal } from "react-bootstrap";
import { useMutation } from 'react-query';
import { API } from '../config/api'
import { Alert } from "react-bootstrap";


const style = {

  Button: {
    color: "white",
    backgroundColor: "#FF6185",


  }

}
function Signup({ show, onHide, onSignin }) {
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    list_as: '',
    gender: '',
    phone: '',
    address: '',


  })

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          'content-type': ' application/json',
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post('/signup', body, config);

      const alert = (<Alert variant='success' className="py-1">Success</Alert>)
      setMessage(alert)
      setForm({
        fullname: '',
        username: '',
        email: '',
        password: '',
        list_as: '',
        gender: '',
        phoone: '',
        address: '',
      })
      console.log("Registrasi berhasil ", response.data.data)
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      )
      setMessage(alert)
      console.log(error)
    }
  })

  return (
    <>
      <Modal

        show={show} onHide={onHide} onSignin={onSignin}
        size="md p-5"
        aria-labelledby="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        centered
      >
        <Card className="px-5 py-5">

          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Label
              className="fs-1 mb-3 fw-bold"
              style={{ color: "#FF6185" }}
            >
              Sign up
            </Form.Label>
            {message && message}
            <Form.Group className="mb-3 " controlId="name">
              <Form.Control
                className="py-3 fs-5"
                style={{ borderColor: "#FF6185" }}
                type="text"
                name="fullname"
                placeholder="FullName"
                required
                onChange={handleOnChange}

              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="name">
              <Form.Control
                className="py-3 fs-5"
                style={{ borderColor: "#FF6185" }}
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleOnChange}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                className="py-3 fs-5"
                style={{ borderColor: "#FF6185" }}
                type="email"
                name="email"
                placeholder="Enter email"
                required
                onChange={handleOnChange}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="py-3 fs-5"
                style={{ borderColor: "#FF6185" }}
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleOnChange}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Select name="list_as" aria-label="Default select example" className="py-3 fs-5"
                onChange={handleOnChange}
                style={{ borderColor: "#FF6185" }} placeholder="List At" >
                <option hidden>List As</option>
                <option>Patient</option>
                <option>Docter</option>

              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Select name="gender" aria-label="Default select example" className="py-3 fs-5"
                onChange={handleOnChange}
                style={{ borderColor: "#FF6185" }} placeholder="List At">
                <option hidden>Gender</option>
                <option style={{ borderColor: "#FF6185" }}>Male</option>
                <option style={{ borderColor: "#FF6185" }}>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="py-3 fs-5"
                style={{ borderColor: "#FF6185" }}
                type="tel"
                name="phone"
                placeholder="phone"
                required
                onChange={handleOnChange}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Control
                onChange={handleOnChange}
                as="textarea"
                placeholder="Address"
                name="address"
                style={{ height: '100px', backgroundColor: "#e1e1e1" }}
              />
            </Form.Group>

            <Button style={style.Button}
              variant="outline-none"
              className="w-100 d-grid gap-2 mt-4"
              size="lg"
              type="submit"
            >
              Register
            </Button>
            <p className="mt-3 fw-2">Don't have an account ? Klik <NavLink onClick={onSignin} className="fw-bold text-dark">Here</NavLink></p>

          </Form>
        </Card>
      </Modal>
    </>
  );
}
export default Signup;
