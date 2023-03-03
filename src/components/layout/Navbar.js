import React from 'react';
import { Container } from 'react-bootstrap';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Container>
                <a className="navbar-brand" href="/">
                    Pokedex App
                </a>
            </Container>
        </nav>
    );
};
