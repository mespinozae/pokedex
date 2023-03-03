import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
    return (
        <Row>
            <Navbar />
            <main>
                <Container>{children}</Container>
            </main>
        </Row>
    );
};
