import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import User from "../assest/userdrp.png";
import Logout from "../assest/logout.png";
import ImgDr from "../assest/imgdocter.png";
import Article from "../assest/article.png";

import { useNavigate } from "react-router-dom"
import { UserContext } from '../context/userContext';


const DropdownDr = () => {
    const navigate = useNavigate()

    const [state, dispatch] = useContext(UserContext)
    console.log(state.isLogin)
    const HandleLogout = () => {

        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={
            <Popover id="popover-basic" style={{ width: "auto", height: "auto", justifyContent: "center", fontWeight: "bold" }}>
                <Popover.Body className="pb-2">
                    <Nav.Link href="/profileDr" > <img src={User} alt="" style={{ width: "30px", height: "40px", marginRight: "30px" }} />Profile</Nav.Link>
                </Popover.Body>

                <Popover.Body className="pt-2">
                    <Nav.Link href="/addArticle"> <img src={Article} alt="" style={{ width: "35px", height: "40px", marginRight: "30px" }} />Add Article</Nav.Link>
                </Popover.Body>

                <hr />
                <Popover.Body className="pt-2">
                    <Nav.Link onClick={HandleLogout}><img src={Logout} alt="" style={{ width: "35px", height: "40px", marginRight: "30px" }} />Logout</Nav.Link>
                </Popover.Body>
            </Popover>
        }>
            <img src={ImgDr} alt="" style={{ width: "60px", height: "60px" }} />
        </OverlayTrigger>
    );
}
export default DropdownDr;