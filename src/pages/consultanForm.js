import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { API } from '../config/api';
import { useMutation } from "react-query";

const style = {
    header: {
        color: "#FF6185",
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "20px",

    },
    controlId: {
        backgroundColor: "#96d3ec"
    }
}

function Reservation() {
    const [message, setMessage] = useState(null)
    const [consul, setConsul] = useState({
        user_id: 0,
        fullname: '',
        phone: '',
        born_date: '',
        age: '',
        weight: '',
        subject: '',
        consultan_date: '',

    })


    const handleOnChange = (e) => {
        setConsul({
            ...consul, [e.target.name]: e.target.value,

        })
    }
    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const body = JSON.stringify(consul)

            const response = await API.post("/consultation", body, config)
            console.log(" add value consultation ", response)
            const alert = (<Alert variant="success" className="py-1">Reservation Success</Alert>)
            setMessage(alert)
            consul({
                fullname: '',
                phone: '',
                born_date: '',
                age: '',
                weight: '',
                subject: '',
                consultan_date: '',
                description: '',
            })
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <Container className="w-50 fw-bold mt-5 bg-light rounded-2">
            <Form className="mx-5" style={{ marginTop: "110px" }} onSubmit={(e) => handleOnSubmit.mutate(e)}>
                <Form.Label style={style.header}>Reservation Consultan</Form.Label>
                {message && message}

                <Form.Group controlId="formGridName" onChange={handleOnChange}>
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control name="fullname" type="text" placeholder="Enter Name" style={{ backgroundColor: "#e1e1e1" }} />
                </Form.Group>
                <Form.Group controlId="formGridPassword" onChange={handleOnChange}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone" type="number" placeholder="Phone" style={{ backgroundColor: "#e1e1e1" }} />
                </Form.Group>
                <Row className="mt-2">
                    <Form.Group as={Col} md="6" controlId="formGridCity" onChange={handleOnChange}>
                        <Form.Label>Born Date</Form.Label>
                        <Form.Control name="born_date" type="date" placeholder="Date" style={{ backgroundColor: "#e1e1e1" }} />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formGridCity" onChange={handleOnChange}>
                        <Form.Label>Age</Form.Label>
                        <Form.Control name="age" type="number" placeholder="Age" style={{ backgroundColor: "#e1e1e1" }} />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formGridZip" onChange={handleOnChange}>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control name="weight" type="number" placeholder="Weight" style={{ backgroundColor: "#e1e1e1" }} />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formGridZip" onChange={handleOnChange}>
                        <Form.Label>Height</Form.Label>
                        <Form.Control name="height" type="number" placeholder="Height" style={{ backgroundColor: "#e1e1e1" }} />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridState" onChange={handleOnChange}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name="gender" defaultValue="Gender" style={{ backgroundColor: "#e1e1e1" }}>
                        <option hidden>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1" onChange={handleOnChange}>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name="subject" placeholder="Subject" style={{ backgroundColor: "#e1e1e1" }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1" onChange={handleOnChange}>
                    <Form.Label>Live Consultan Date</Form.Label>
                    <Form.Control name="consultan_date" placeholder="Consult Date" style={{ backgroundColor: "#e1e1e1" }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleOnChange}
                        name="description"
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '200px', backgroundColor: "#e1e1e1" }}
                    />
                </Form.Group>
                <div className='d-flex justify-content-center mt-5'>
                    <Button style={{ backgroundColor: "#FF6185", marginBottom: "20px" }}
                        variant="danger"
                        className="w-50"
                        size="md"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </Form>
        </Container >

    );
}


export default Reservation;