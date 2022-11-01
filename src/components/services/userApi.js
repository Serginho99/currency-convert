import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function signUp(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function logIn(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logOut() {
  await axios.post('/users/logout');
}

export async function fetchCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
