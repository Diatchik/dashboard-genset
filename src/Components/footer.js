import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';




export default class footer extends Component {
    render() {
        return (
            <>
                <Navbar class="fixed-bottom" bg="light" className=" border" >
                    <Container>
                        <Navbar.Brand >
                        
                        <a href="https://www.jv-technoton.com/ru/" className=" h6  badge-light">© TECHNOTON 2020</a>  

                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}

