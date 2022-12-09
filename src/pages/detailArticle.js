import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Buah from '../assest/buah.png';


const style = {

    header: {
        fontSize: "20px",
        marginTop: "10px",

    }
}
function DetailArticle() {
    return (
        <Container>
            <Card>
                <Card.Text className="mb-1 fw-bold" style={style.header}>
                    Ini Alasan Buah dan Sayur dari Supermarket Harus Dicuci
                </Card.Text>
                <Card.Text className="mb-1" style={style.header}>
                    05 Desember 2022
                </Card.Text>
                <Card.Text className="mb-1" style={style.header}>
                    Author : Daniel
                </Card.Text>



                <Card.Img style={{ width: "90%", paddingLeft: "100px" }} src={Buah} alt="Card image" />

            </Card>

        </Container>

    );
}


export default DetailArticle;