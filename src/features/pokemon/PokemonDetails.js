import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FloatingSpinner } from '../../components/FloatingSpinner';
import { selectedPokemon } from '../../redux/slices/pokemons';

export const PokemonDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { selected: pokemon } = useSelector((state) => state.pokemons);
    const { loading } = useSelector((state) => state.ui);

    useEffect(() => {
        dispatch(selectedPokemon(id));
    }, [dispatch, id]);

    return (
        <>
            {loading ? (
                <FloatingSpinner />
            ) : (
                <div>
                    <hr />
                    <Row>
                        <Col md={3} className="mb-4">
                            <div className="card">
                                <img src={pokemon.image} alt={pokemon.name} />
                            </div>
                        </Col>

                        <Col md={9} className="mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {' '}
                                            <strong>Nombre:</strong>{' '}
                                            {pokemon.name}
                                        </li>
                                        <li className="list-group-item">
                                            {' '}
                                            <strong>Habilidad:</strong>{' '}
                                            {pokemon.abilities?.join(', ')}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Tipo: </strong>{' '}
                                            {pokemon.types?.join(', ')}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Lugares: </strong>{' '}
                                            {pokemon.encounters?.join(', ')}
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <div className="justify-content-md-end">
                                        <Button variant="outline-primary">
                                            <Link
                                                to={`/`}
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Volver
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </>
    );
};
