import React from "react";
import {Nav, Logo} from "./style";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navibar() {
    return (
        <Nav>
            <Logo>
                asdfasdf
            </Logo>
        </Nav>
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="/" className="mr-auto">UNCHAIN example</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse className="justify-content-end">
        //             <Nav>
        //                 <Nav.Link href="/">Main</Nav.Link>
        //                 <Nav.Link href="/contact">Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}