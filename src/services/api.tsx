import axios from 'axios';

export const axiosJsonPlaceHolderInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
