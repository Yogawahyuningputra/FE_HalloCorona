import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import Logo from '../assest/hallocorona.png';
import Sign from "./signin";
import Signup from "./signup";
import DropdownPtn from "./DropdownPtn";
import DropdownDr from "./DropdownDr";
import { UserContext } from "../context/userContext";




const style = {
    Button1: {
        buttonHover: "#FF6185",
        variant: "outline",
        hover: ""
    },
    Button2: {
        color: "white",
        backgroundColor: "#FF6185",
        marginRight: "10px",

    }

}
function Nav() {
    const [state, dispatch] = useContext(UserContext);
    console.log('dispatch', dispatch)
    const [signinShow, setSigninShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);

    return (
        <>

            <Navbar className="navbar fixed-top " bg="light" style={{ boxShadow: "0px 1px 5px" }}>

                <Container className="w-100">
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            width="280px"
                            height="70px"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end gap-3">
                        {state.isLogin === false ? (
                            <>
                                <Button style={style.Button1} className="d-flex justify-content-end" variant="outline-danger mx-3" onClick={() => setSigninShow(true)}>
                                    Sign in
                                </Button>
                                <Button style={style.Button2} className="d-flex justify-content-end" variant="outline" onClick={() => setSignupShow(true)}>
                                    Sign up
                                </Button>
                            </>
                        ) : (
                            <div>
                                {state.user.list_as === "Docter" ? (

                                    <DropdownDr />
                                ) : (
                                    <DropdownPtn />
                                )}
                            </div>
                        )}
                    </Navbar.Collapse>

                </Container>
                <Sign
                    show={signinShow} // false
                    onHide={setSigninShow}
                    onSignup={() => { setSigninShow(false); setSignupShow(true); }}
                    setSigninShow={setSigninShow}
                    setSignupShow={setSignupShow}
                />
                <Signup show={signupShow} // false
                    onHide={setSignupShow}
                    onSignin={() => { setSignupShow(false); setSigninShow(true); }}
                    setSigninShow={setSigninShow}
                    setSignupShow={setSignupShow} />
            </Navbar>


        </>
    );
}

export default Nav;