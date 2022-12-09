import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import User from "../assest/userdrp.png";
import Logout from "../assest/logout.png";
import ImgPatient from "../assest/imgpatient.png";
import Email from "../assest/emaildrp.png";

import { useNavigate } from "react-router-dom"
import { UserContext } from '../context/userContext';




const DropdownPatient = () => {
    const navigate = useNavigate()

    const [state, dispatch] = useContext(UserContext)
    console.log(state.isLogin)

    const HandleLogout = (e) => {

        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="popover-basic" style={{ width: "300", height: "auto", fontWeight: "bold" }}>

            <Popover.Body>
                <Nav.Link href="/Profile"> <img src={User} alt="" style={{ width: "30px", height: "40px", marginRight: "30px" }} />Profile</Nav.Link>
            </Popover.Body>
            <Popover.Body>
                <Nav.Link href="/reservation"> <img src={Email} alt="" style={{ width: "30px", height: "40px", marginRight: "30px" }} />Consultation</Nav.Link>
            </Popover.Body>
            <hr></hr>
            <Popover.Body>
                <Nav.Link onClick={HandleLogout}><img src={Logout} alt="" style={{ width: "35px", height: "40px", marginRight: "30px" }} />Logout</Nav.Link>
            </Popover.Body>
        </Popover>}>
            <img src={ImgPatient} alt="" style={{ width: "60px", height: "60px" }} />
        </OverlayTrigger>

    );
}
export default DropdownPatient;