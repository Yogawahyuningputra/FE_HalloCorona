import { Container, Table, Form, Stack, Button, Row, Col, Card } from 'react-bootstrap';


function Invoice() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card.Text>Sakit Kepala Berlebih</Card.Text>
                    <Card.Text> Dok kenapa ya disetiap malam kepala saya suka sakit kepa berlebih terlebih lagi kalau  tidak mempunyai uang
                        lalu terkadang tenggorokan saya suka sakit gitu dok, dan masih banyak lagi yang lain nya dok
                        segera di response dok ya kapan kira-kira bisa konsultasinyaterimakasih
                    </Card.Text>
                </Col>
                <Col xs lg="2">
                    Images
                </Col>
                <Col md="auto">Variable width content</Col>
            </Row>


            <Stack className="mt-3">

                <Table striped>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>FullName</th>
                            <th>gender</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </Table>
                <Form.Group className="mb-3 fw-bold" controlId="formGridAddress1">
                    <Form.Label>Give Response</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '200px', backgroundColor: "#e1e1e1" }}
                    />
                </Form.Group>
            </Stack>
            <Stack direction='horizontal' className='d-flex justify-content-end'>

                <Button variant="danger">Cancel</Button>{' '}
                <Button variant="success" className='mx-2'>Aprove</Button>{' '}


            </Stack>
        </Container >
    );


}

export default Invoice;