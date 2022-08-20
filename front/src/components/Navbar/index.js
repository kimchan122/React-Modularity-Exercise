import React, { useState } from "react";
import { NavInit, Navi, LogoTitle, NavContainer, NavContainerText } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledLink } from "./style";
import { OffcanvasSNS } from "./style";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaDiscord, FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Navibar() {
    const [show, setShow] = useState(false);

    const toggleOffCanvas = () => {
        // if (show == true) {
            setShow((show) => !show);
        // }
    };
    const toggleCloseCanvas = () => {
        setShow(false);
    }

    return (
        <NavInit>
            <Navbar key="sm" expand="sm" bg="dark" variant="dark">
                <Navi>
                    <StyledLink to="/" >
                        <LogoTitle>
                            UNCHAIN
                        </LogoTitle>
                    </StyledLink>
                    <NavContainer>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-md`}
                            onClick={toggleOffCanvas}
                        />
                    </NavContainer>
                    <NavContainerText>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-md`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                            show={show}
                            onHide={toggleOffCanvas}
                        >
                            <Offcanvas.Header closeButton>
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
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1" collapseOnSelect={true}>
                                    <StyledLink to="/" onClick={toggleCloseCanvas}>Home</StyledLink>
                                    <StyledLink to="/about" onClick={toggleCloseCanvas}>About</StyledLink>
                                    <StyledLink to="/details" onClick={toggleCloseCanvas}>Details</StyledLink>
                                    <StyledLink to="/contact" onClick={toggleCloseCanvas}>Contact</StyledLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </NavContainerText>
                </Navi>
            </Navbar>
        </NavInit>
    )
}