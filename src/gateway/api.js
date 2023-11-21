import axios from 'axios';

const api = axios.create({
  baseURL: 'https://semanahiphop-backend-0f1df674b88c.herokuapp.com/'
});

export const fetchEditionsData = async () => {
  
  try {
    
    const response = await api.get('/editions');

    if (response.status !== 200) {
      throw new Error('Erro ao buscar edições');
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
