import axios from 'axios';

export async function fetchContacts() {
  try {
    const result = await axios.get(
      'https://63565a17a2d1844a9772961c.mockapi.io/api/v1/contacts'
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addContact(data) {
  const result = await axios.post(
    `https://63565a17a2d1844a9772961c.mockapi.io/api/v1/contacts`,
    data
  );
  //   console.log(result);
  return result.data;
}

export async function deleteContact(id) {
  const result = await axios.delete(
    `https://63565a17a2d1844a9772961c.mockapi.io/api/v1/contacts/${id}`
  );
  //   console.log('result.data', result.data);
  return result.data;
}
