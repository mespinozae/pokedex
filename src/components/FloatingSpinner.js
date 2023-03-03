import React from 'react';
import { Spinner } from 'react-bootstrap';

export const FloatingSpinner = () => {
    return (
        <div style={{ textAlign: 'center', padding: '5% 0' }}>
            <Spinner
                as="div"
                animation="border"
                variant="secondary"
                style={{ width: '10rem', height: '10rem' }}
                role="status"
                aria-hidden="true"
            />
        </div>
    );
};
