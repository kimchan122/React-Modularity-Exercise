import React, { useState } from "react";
import { NavInit, Navi, LogoTitle, NavContainerText, Styledbutton, StyledLink } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { OffcanvasSNS } from "./style";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaDiscord, FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Navibar() {
    const [show, setShow] = useState(false);

    const toggleOffCanvas = () => {
        setShow((show) => !show);
    };
    const toggleCloseCanvas = (to) => {
        setShow(false);
        window.scrollTo(0, to * window.innerHeight);
    }

    return (
        <div className="TopNavigationBar">
            <Container>
                <Row>
                    <Col>
                        <button className="LogiTitle" to="/">
                            D-Ad
                        </button>
                    </Col>
                    <Col></Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <Navbar key="sm" expand="sm" bg="dark" variant="dark" >
                <Navi>
                    <NavContainerText>
                        <Navbar.Toggle
                            style={{ backgroundColor: "black" }}
                            aria-controls={`offcanvasNavbar-expand-md`}
                            onClick={toggleOffCanvas}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-md`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                            show={show}
                            onHide={toggleOffCanvas}
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                    UNCHAIN
                                </Offcanvas.Title>
                                <OffcanvasSNS>
                                    <FaDiscord size="24" style={{ marginRight: '10px' }} />
                                    <FaTelegram size="24" style={{ marginRight: '10px' }} />
                                    <FaTwitter size="24" style={{ marginRight: '10px' }} />
                                    <FaGithub size="24" />
                                </OffcanvasSNS>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav >
                                    <StyledLink to="/" >Home</StyledLink>
                                    <Styledbutton onClick={e => toggleCloseCanvas(1)} style={{ padding: "0" }}>About</Styledbutton>
                                    <Styledbutton onClick={e => toggleCloseCanvas(2)} style={{ padding: "0" }}>Details</Styledbutton>
                                    <StyledLink to="/SSI"> Self Sovereign Identity</StyledLink>
                                    {/* <StyledLink to="/contact" onClick={toggleCloseCanvas} >Contact</StyledLink> */}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </NavContainerText>
                </Navi>
            </Navbar>
        </div>
    )
}