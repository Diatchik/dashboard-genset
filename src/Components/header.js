import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'
import logoname from '../assets/logoname.png'


export default class header extends Component {
    render() {
        return (
            <>
                <Navbar position="static" bg="dark" variant="info">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top mr-4"
                                alt="logo"


                            />
                            <img
                                src={logoname}
                                height="30"
                                className="d-inline-block align-top"
                                alt="ORF MQTT"
                            />

                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}

