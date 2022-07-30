import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavBarPage extends Component {

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        this.userRole=localStorage.getItem('userRole');
    }

    render() {
        return (
            <><Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Home">Home</Nav.Link>
                            <Nav.Link href="/WriteAPost">Write A Post</Nav.Link>
                            {this.userRole === "M" ? (
                                <Nav.Link href="/SeeStats">See Statistics</Nav.Link>
                            ) : (
                                <span></span>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
        );
    }
}
export default NavBarPage; 