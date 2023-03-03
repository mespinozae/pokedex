export const getIdFromUrl = (url) => {
    return Number(url.split('/')[6]) || 1;
};

export const getUrlImageById = (id) => {
    const baseUrl = process.env.REACT_APP_BASE_URL_IMAGE;

    return `${baseUrl}/${id}.png`;
};
