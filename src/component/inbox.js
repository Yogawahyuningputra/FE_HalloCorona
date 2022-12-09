import { Container, Row, Col, Card } from "react-bootstrap";
import Img from "react-bootstrap/Image";
import ImgPatient from "../assest/imgpatient.png";
import ImgDocter from "../assest/imgdocter.png";

const style = {
    header: {
        color: "#FF6185",
        textAlign: "start",
        fontSize: "50px",
        marginTop: "10px",
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "10px",
    },
    titkel: {
        fontSize: "16px",
        marginTop: "10px",
        color: "#6C6C6C",
    },
};
function Inbox() {
    return (
        <Container className="w-75">
            <Card.Text style={style.header}> Consultation</Card.Text>

            <Card className="shadow p-3 w-100">

                <Row>
                    <Col xs={2}>
                        <Img
                            className="mx-5 mt-5 mb-5"
                            src={ImgPatient}
                            style={{
                                width: "50%",
                                height: "auto",
                            }}
                        />
                    </Col>
                    <Col xs={8}>
                        <Card.Text style={style.title}> Sakit Kepala berlebih </Card.Text>
                        <Card.Text style={style.titkel}>20 april 1867 </Card.Text>
                        <Card.Text style={style.titkel}>
                            {" "}
                            Keluhan : Keluhan : Dok kenapa ya disetiap malam kepala saya suka
                            sakit kepa berlebih terlebih lagi kalau tidak mempunyai uang{" "}
                        </Card.Text>
                    </Col>
                    <Col xs={2} className="fw-bold mt-2">
                        17 April 2022
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={2}>
                        <Img
                            className="mb-5 mt-4"
                            src={ImgDocter}
                            style={{
                                width: "50%",
                                height: "auto",
                            }}
                        />
                    </Col>
                    <Col xs={6} style={style.titkel} className=" mt-4 mb-5">
                        <Card.Text>
                            Hi Radif hari ini adalah jadwal konsultasi kamu, silahkan klik link
                            berikut untuk melakukan konsultasi secara langsung kepada saya : Here
                        </Card.Text>

                        <Card.Text>   Dr. Anto Ariza</Card.Text>
                    </Col>{" "}
                </Row>
            </Card>
        </Container>
    );
}

export default Inbox;
