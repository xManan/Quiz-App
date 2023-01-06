import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link  } from 'react-router-dom'

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className="navbar-brand">Quiz App</Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation
