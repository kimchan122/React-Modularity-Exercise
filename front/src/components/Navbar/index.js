import React, { useState, useEffect } from "react";
import { NavInit, Navi, LogoTitle, NavContainer, NavContainerText } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledLink } from "./style";
import { OffcanvasSNS } from "./style";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaDiscord, FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Navibar() {
    const [show, setShow] = useState(false);

    const [location, setLocation] = useState(0);

    const toggleOffCanvas = () => {
        // if (show == true) {
        setShow((show) => !show);
        // }
    };
    const toggleCloseCanvas = (to) => {
        setShow(false);
        window.scrollTo(0, to * window.innerHeight);
        // set
    }

    return (
        <NavInit >
            <Navbar key="sm" expand="sm" bg="dark" variant="dark" >
                <Navi>
                    <StyledLink to="/" style={{marginLeft: "9.5vw"}}>
                        <LogoTitle>
                            D-Ad
                        </LogoTitle>
                    </StyledLink>
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
                                <Nav collapseOnSelect={true}>
                                    <StyledLink onClick={e => toggleCloseCanvas(0)} >Home</StyledLink>
                                    <StyledLink onClick={e => toggleCloseCanvas(1)}>About</StyledLink>
                                    <StyledLink onClick={e => toggleCloseCanvas(2)}>Details</StyledLink>
                                    {/* <StyledLink to="/calendar" onClick={toggleCloseCanvas}>Calendar</StyledLink> */}
                                    {/* <StyledLink to="/contact" onClick={toggleCloseCanvas} >Contact</StyledLink> */}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </NavContainerText>
                </Navi>
            </Navbar>
        </NavInit>
    )
}