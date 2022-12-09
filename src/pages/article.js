import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Ujilab from '../assest/ujilab.png';

function Home() {
    return (
        <>
            <Row xs="4" className="d-flex justify-content-center gap-2 mx-3">

                <Col
                    xs="4"
                    className="mt-5 mb-5"
                    style={{ width: "18rem", height: "auto" }}
                >
                    <Card>
                        <Card.Img variant="top" src={Ujilab} />
                        <Card.Body>
                            <Card.Text className="mb-1 fw-bold">
                                WHO tengah Uji Lab Vaksin Booster
                            </Card.Text>
                            <Card.Text style={{ color: "#", fontSize: "12px" }}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                            </Card.Text>
                            <Card.Text style={{ color: "#" }}>

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>


            </Row>
        </>

    );
}


export default Home;