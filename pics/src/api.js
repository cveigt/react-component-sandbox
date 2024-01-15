import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID wLl4JlqrS8CZhkfivWtBru6ZP3-1PCfkKs7PS-lZBjc'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;