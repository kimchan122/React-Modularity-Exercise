import React from "react";
import { NavInit, Navi, LogoTitle, NavContainer, NavContainerText, NavElement, MarginRight } from "./style";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { StyledLink } from "./style";
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1">
                                    {/* <Nav.Link href="/">Home</Nav.Link>
                                 */}
                                    <StyledLink to="/" >Home</StyledLink>
                                    <StyledLink to="/about" >About</StyledLink>
                                    <StyledLink to="/contact" >Contact</StyledLink>
                                    {/* <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contact">Conatct</Nav.Link> */}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </NavContainerText>
                </Navi>
            </Navbar>
        </NavInit>
    )
}