import { Container, Table, Form, Stack, Card } from 'react-bootstrap';
import Img from 'react-bootstrap/Image';
import Search from '../assest/search.png';

const style = {

    header: {
        color: "#FF6185",
        textAlign: "center",
        fontSize: "50px",
        marginTop: "10px",

    }
}
function ReservasiData() {
    return (
        <Container>
            <Form.Label className="d-flex justify-content-start fw-bold" style={style.header}>Reservasi Data</Form.Label>

            <Card className="d-flex justify-content-center">

                <Stack gap={3}>

                    <Table striped>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Users</th>
                                <th>Subject</th>
                                <th>Date Of Complaint</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Sakit Kepala</td>
                                <td>10 april 2022</td>
                                <td>Cancel</td>
                                <td>
                                    <Img
                                        src={Search}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            justifyContent: "center",
                                        }}
                                    /></td>
                            </tr>


                        </tbody>
                    </Table>

                </Stack>
            </Card>
        </Container>

    );


}

export default ReservasiData;