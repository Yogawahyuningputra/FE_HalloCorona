import React, { useState, useContext } from "react";
import { Button, Form, Card, NavLink, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { Alert } from "react-bootstrap";


const style = {

  Button: {
    color: "white",
    backgroundColor: "#FF6185",
    border: "outline-none"


  }

}


function Signin({ show, onHide, onSignup, setSigninShow }) {

  let navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext);
  console.log("isi state =>", state)
  const [message, setMessage] = useState(null)

  const [user, setUser] = useState({
    username: '',
    password: '',

  })
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const response = await API.post('/signin', user)

      const alert = (<Alert variant='success' className="py-1">Success</Alert>)

      setMessage(alert)
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data
      })
      console.log("login success =>", response.data.data)
      navigate('/')

    } catch (err) {
      const alert = (<Alert variant='danger' className="py-1">Failed</Alert>)
      setMessage(alert)
      console.log(err)
    }
    setSigninShow(false)
  })

  return (

    <Modal
      show={show} onHide={onHide} onSignup={onSignup}
      size="md p-5"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Card className="Form px-5 py-5" style={{ borderColor: "" }}>

        <Form.Label
          className="fs-1 mb-3 fw-bold"
          style={{ color: "#FF6185" }}
        >
          Sign in
        </Form.Label>
        {message}
        <Form onSubmit={(e) => handleSubmit.mutate(e)} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="py-3 fs-5"
              style={{ borderColor: "#FF6185" }}
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={handleOnChange}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="py-3 fs-5"
              style={{ borderColor: "#FF6185" }}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}

            />
          </Form.Group>
          <Button style={style.Button}
            variant="outline-none "
            className="w-100 d-grid gap-2 mt-4"
            size="lg"
            type="submit"
          >
            Login
          </Button>
          <p className="mt-3 fw-1">Don't have an account ? Klik <NavLink onClick={onSignup} className="fw-bold text-dark ">Here </NavLink></p>

        </Form>

      </Card>

    </Modal >
  );
}


export default Signin;
