import React from 'react';
import { Card } from 'react-bootstrap';
import Jumbotron from '../assest/Jumbotron.png';
import Konsultasi from '../assest/konsultasi.png';
import Article from './article';



const style = {
    konsultasi: {
        marginTop: "220px",
        marginLeft: "150px",
        width: "350px",
        height: "60px",
    },
    header: {
        color: "#FF6185",
        textAlign: "center",
        fontSize: "50px",
        marginTop: "10px",

    }
}
function Home() {
    return (
        <>
            <Card className="text-white" style={{ marginTop: "96px" }}>
                <Card.Img src={Jumbotron} alt="Card image" />

                <Card.ImgOverlay >
                    <Card.Img type="button" href="/consultanForm" style={style.konsultasi} src={Konsultasi} alt="Card image" />
                </Card.ImgOverlay>
            </Card>
            <Card.Text className="mb-1 mt-5 bold" style={style.header}>
                Artikel Hari Ini
            </Card.Text>
            <Article />
        </>
    );
}


export default Home;