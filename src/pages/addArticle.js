import React, { useState, useEffect, useContext } from "react";
import { Container, Form, Button, Card } from 'react-bootstrap';
// import UserContext from '../context/userContext';
import { Alert } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from '../config/api';
import { UserContext } from "../context/userContext";

const style = {
    header: {
        color: "#FF6185",
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "20px",
        marginTop: "10px"

    },
    controlId: {
        backgroundColor: "#96d3ec"
    }
}

function Reservation() {

    const [message, setMessage] = useState(null)
    const [state] = useContext(UserContext)
    const [preview, setPreview] = useState(null)

    const [article, setArticle] = useState({
        title: '',
        image: '',
        desc: '',

    })
    const handleOnChange = (e) => {
        setArticle({
            ...article, [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        })
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }
    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()
            const config = {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }

            const formData = new FormData()
            formData.set("title", article.title)
            formData.set("desc", article.desc)
            formData.set("image", article.image[0], article.image[0].title)

            const response = await API.post("/article", formData, config)
            console.log("Data Article", response)
            const alert = (<Alert variant='success' className='py-1'>
                Add Product Success
            </Alert>)
            setMessage(alert)
            article({
                title: '',
                desc: '',
                image: '',
            });
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <Container className="w-50 fw-bold bg-light rounded-2">
            <Form className="mx-5" style={{ marginTop: "110px" }} onSubmit={(e) => handleOnSubmit.mutate(e)}>
                <Form.Label style={style.header}>Add Article</Form.Label>
                {message && message}
                <Form.Group controlId="formGridName" onChange={handleOnChange}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter Name" style={{ backgroundColor: "#e1e1e1" }} />
                </Form.Group>
                {preview && (
                    <Card.Img
                        variant="top"
                        src={preview}
                        alt={preview}
                        style={{ width: "100px", height: "60px", marginTop: "10px" }}
                    />
                )}
                <Form.Control onChange={handleOnChange}
                    className="mt-2 border-light"
                    style={{ borderColor: "#bd0707", width: "100px" }}
                    type="file"
                    placeholder="Photo Product"
                    name="image"
                    required
                />

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleOnChange}
                        as="textarea"
                        name="desc"
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