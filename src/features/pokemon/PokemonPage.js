import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchPokemons } from '../../redux/slices/pokemons';
import { useForm } from '../../hooks/useForms';
import { FloatingSpinner } from '../../components/FloatingSpinner';
import { PokemonCard } from './PokemonCard';

export const PokemonPage = () => {
    const { list: pokemons } = useSelector((state) => state.pokemons);
    const { loading } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);
    const [formValues, handleInputChange] = useForm({
        searchText: '',
    });
    const { searchText } = formValues;

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    useEffect(() => {
        const buscar = searchText;

        const filtros = pokemons?.filter((pokemon) => {
            const nombre = pokemon.name ? pokemon.name.toLowerCase() : '';

            if (nombre.search(buscar) >= 0) {
                return true;
            }
            return false;
        });

        setPokemonsFiltrados(filtros);
    }, [searchText, pokemons]);

    useEffect(() => {
        setPokemonsFiltrados(pokemons);
    }, [pokemons]);

    return (
        <>
            {loading ? (
                <FloatingSpinner />
            ) : (
                <Container className="mt-4">
                    <Row>
                        <Col md={6} className="mb-4">
                            <input
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                placeholder="Buscar..."
                                value={searchText}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        {pokemonsFiltrados.map((pokemon, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <PokemonCard
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    image={pokemon.image}
                                />
                            </div>
                        ))}
                    </Row>
                </Container>
            )}
        </>
    );
};
