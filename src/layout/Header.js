import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="App">
      
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" style={{ marginLeft: '10px' }}>Board</Navbar.Brand>
                     <Nav className="me-auto">
                        <Nav.Link href="/board">게시판</Nav.Link>
                        <Nav.Link href="#">기능1</Nav.Link>
                        <Nav.Link href="#">기능2</Nav.Link>
                    </Nav>
            </Navbar>
      
            </div>
          
            <hr/>
        </header>
    );
};

export default Header;