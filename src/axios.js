import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://node-tinder-backen.herokuapp.com'
});

export default instance;