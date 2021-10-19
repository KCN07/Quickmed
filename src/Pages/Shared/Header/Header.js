import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from "../../../hooks/useFirebase";
import './Header.css';
import useAuth from "../../../hooks/useAuth";

const Header = () => {
     const { user, logOut } = useAuth();
  return (
    <>
      <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg" className="bg-color p-2" >
                <Container>
                    <Navbar.Brand as={Link} to="/home" style={{ fontSize: '40px'}}>Quickmed</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" style={{ fontSize: '20px'}}>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" style={{ fontSize: '20px'}}>Services</Nav.Link>
                        <Nav.Link as={Link} to="/doctors" style={{ fontSize: '20px'}}>Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{ fontSize: '20px'}}>About us</Nav.Link>
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="primary" className="me-2">Logout</Button> :
                            <Nav.Link as={Link} to="/login" style={{ fontSize: '20px'}}>Login</Nav.Link>}
                        
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
    </>
  );
};

export default Header;
