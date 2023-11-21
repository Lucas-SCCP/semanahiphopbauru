import { fetchEditionsData } from '../gateway/api';

const getEditions = async () => {
  try {
    const userData = await fetchEditionsData();
    
    return userData;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export { getEditions };
