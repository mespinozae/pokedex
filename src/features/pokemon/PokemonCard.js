import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const PokemonCard = ({ id, name, image }) => {
    return (
        <div className="card">
            <img src={image} alt="imagen" />
            <div className="card-body">
                <h5 className="card-title text-center"> {name}</h5>
                <div className="col text-center">
                    <Button variant="outline-primary">
                        <Link
                            to={`pokemons/${id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            Ver detalle
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
