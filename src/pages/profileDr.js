import React from "react";

import { Container, Row, Card, Stack, Button } from 'react-bootstrap';

import Img from "react-bootstrap/Image";
import Docter from "../assest/docter.png";
import User from "../assest/user.png";
import Phone from "../assest/phone.png";
import Gender from "../assest/gender.png";
import Person from "../assest/card.png";
import Pin from "../assest/pin.png";
import Mail from "../assest/mail.png";




function ProfileDr() {

    return (

        <Container className="d-flex justify-content-center">
            <Row direction="horizontal" className="p-3 mb-5 rounded-4" style={{ marginTop: "130px", width: "70%", boxShadow: "0px 0px 5px black" }}>
                <Stack direction="horizontal" xl={6} gap={3} style={{}}>
                    <Stack direction="vertical">

                        <Card.Text style={{ fontWeight: "bold", fontSize: "22px" }}>Personal Info</Card.Text>

                        <Stack direction="horizontal" gap={3} className="mb-4">

                            <Img src={User} style={{ width: "35px", height: "35px" }} />

                            <Stack direction="vertical">
                                <Card.Text style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "0px" }}>Radif Ganteng</Card.Text>
                                <Card.Text style={{ fontSize: "12px", color: "#8A8C90" }}>Fullname</Card.Text>
                            </Stack>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className="mb-4">

                            <Img src={Mail} style={{ width: "35px", height: "35px" }} />

                            <Stack direction="vertical">
                                <Card.Text style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "0px" }}>radifgans@mail.com</Card.Text>
                                <Card.Text style={{ fontSize: "12px", color: "#8A8C90" }}>Email</Card.Text>
                            </Stack>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className="mb-4">

                            <Img src={Person} style={{ width: "35px", height: "35px" }} />

                            <Stack direction="vertical">
                                <Card.Text style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "0px" }}>Docter</Card.Text>
                                <Card.Text style={{ fontSize: "12px", color: "#8A8C90" }}>Status</Card.Text>
                            </Stack>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className="mb-4">

                            <Img src={Gender} style={{ width: "35px", height: "35px" }} />

                            <Stack direction="vertical">
                                <Card.Text style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "0px" }}>Male</Card.Text>
                                <Card.Text style={{ fontSize: "12px", color: "#8A8C90" }}>Gender</Card.Text>
                            </Stack>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className="mb-4">

                            <Img src={Phone} style={{ width: "35px", height: "35px" }} />

                            <Stack direction="vertical">
                                <Card.Text style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "0px" }}>089777898888</Card.Text>
                                <Card.Text style={{ fontSize: "12px", color: "#8A8C90" }}>Phone </Card.Text>
                            </Stack>
                        </Stack>
                        <Stack direction="horizontal" gap={3} className="mb-4">

                            <Img src={Pin} style={{ width: "35px", height: "35px" }} />

                            <Stack direction="vertical">
                                <Card.Text style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "0px" }}>Perumahan Permata Bintaro Residence C-3</Card.Text>
                                <Card.Text style={{ fontSize: "12px", color: "#8A8C90" }}>Address</Card.Text>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction="vertical" className="">
                        <Img className="rounded-3"
                            src={Docter}
                            style={{
                                width: "100%",
                                height: "auto",

                            }}
                        />
                        <Button className="mb-4 mt-2 w-100 fw-bold" variant="outline-none" style={{ backgroundColor: "#FF6185", color: "white" }}>Change Photo Profile</Button>

                    </Stack>
                </Stack>
            </Row>
        </Container>
    );
}

export default ProfileDr;