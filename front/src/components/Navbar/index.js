import React from "react";
import { NavInit, Navi, LogoTitle, NavContainer, NavContainerText } from "./style";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledLink } from "./style";
import { OffcanvasSNS } from "./style";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaDiscord, FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Navibar() {
    return (
        <NavInit>
            <Navbar key="md" expand="md" bg="dark" variant="dark">
                <Navi>
                    <StyledLink to="/" >
                        <LogoTitle>
                            UNCHAIN
                        </LogoTitle>
                    </StyledLink>
                    <NavContainer>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    </NavContainer>
                    <NavContainerText>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-md`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                    UNCHAIN
                                </Offcanvas.Title>
                                <OffcanvasSNS>
                                    <FaDiscord size="24" style={{marginRight: '10px'}}/>
                                    <FaTelegram size="24" style={{marginRight: '10px'}}/>
                                    <FaTwitter size="24" style={{marginRight: '10px'}}/>
                                    <FaGithub size="24" />
                                </OffcanvasSNS>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1">
                                    <StyledLink to="/" >Home</StyledLink>
                                    <StyledLink to="/about" >About</StyledLink>
                                    <StyledLink to="/details" >Details</StyledLink>
                                    <StyledLink to="/contact" >Contact</StyledLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </NavContainerText>
                </Navi>
            </Navbar>
        </NavInit>
    )
}