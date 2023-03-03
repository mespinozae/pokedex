import axios from 'axios';
import { getIdFromUrl, getUrlImageById } from '../helpers/mappers';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAll = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}?limit=151&offset=0`);

        const pokemons = data.results.map(({ name, url }) => {
            const id = getIdFromUrl(url);
            const image = getUrlImageById(id);

            return {
                id,
                name,
                image,
            };
        });

        return pokemons;
    } catch (error) {
        console.log(error);
    }
};

export const getDetailById = async (id) => {
    try {
        let pokemon = {};
        const image = getUrlImageById(id);

        const urlDetails = `${baseUrl}/${id}`;
        const urlEncounters = `${baseUrl}/${id}/encounters`;

        const [resDetails, resEncounters] = await Promise.all([
            axios.get(urlDetails),
            axios.get(urlEncounters),
        ]);

        const abilities = resDetails.data.abilities.map(
            ({ ability }) => ability.name
        );
        const types = resDetails.data.types.map(({ type }) => type.name);
        const name = resDetails.data.name;

        const encounters = resEncounters.data.map(
            ({ location_area }) => location_area.name
        );

        pokemon = {
            id,
            name,
            image,
            abilities,
            types,
            encounters,
        };

        return pokemon;
    } catch (error) {
        console.log(error);
    }
};
