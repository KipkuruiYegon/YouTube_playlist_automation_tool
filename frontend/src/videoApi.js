import axios from 'axios';

const fetchVideos = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/ungrouped');
        return response.data; // Return the data for use elsewhere
    } catch (error) {
        console.error('Error fetching videos:', error);
        throw error; // Re-throw the error for further handling
    }
};

export default fetchVideos;
