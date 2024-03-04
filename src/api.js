import axios from 'axios';

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID QALt0HJou_ICVfkEs36zDG-N506Ue66kktfN3hf0kHg'
        },
        params: {
            query: searchTerm
        }
    });

    return response.data.results;
}

export default searchImages;