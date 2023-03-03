import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PokemonPage } from '../features/pokemon/PokemonPage';
import { PokemonDetails } from '../features/pokemon/PokemonDetails';
import { NotFoundPage } from '../components/NotFoundPage';

export const DashboardRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<PokemonPage />} />
                    <Route path="pokemons/:id" element={<PokemonDetails />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </>
    );
};
