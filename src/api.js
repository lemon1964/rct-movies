import { API_URL } from './config';

const getMovieById = async (movieId) => {
    try {
        const response = await fetch(`${API_URL}/movies/${movieId}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch movie by ID:', error);
        throw error;
    }
};

const getAllCategories = async () => {
    try {
        console.log('Fetching categories from:', `${API_URL}/categories/`);
        const response = await fetch(`${API_URL}/categories/`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched categories data:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        throw error;
    }
};

const getMoviesByCategory = async (categoryId) => {
    try {
        const response = await fetch(`${API_URL}/categories/${categoryId}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched movies by category data:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch movies by category:', error);
        throw error;
    }
};

export { getMovieById, getAllCategories, getMoviesByCategory };
