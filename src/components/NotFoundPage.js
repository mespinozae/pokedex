import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const NotFoundPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div class="alert alert-danger mt-4" role="alert">
                        Página no encontrada!
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className="btn btn-outline-primary">
                        <Link to={`/`}>Volver al listado</Link>
                    </button>
                </Col>
            </Row>
        </Container>
    );
};
