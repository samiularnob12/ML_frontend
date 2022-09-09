import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">ASL Learner</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                   
                </Nav>
            </Container>
        </Navbar>

      </div>
    )
  }
}
