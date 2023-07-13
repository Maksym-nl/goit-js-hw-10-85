import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_ d9fet9JvTY7sUSpy1ezmELB3sSoHVW PmHXnghG0BadLXXdp6FU6npNHFrcuX U452';

async function fetchBreeds() {
  try {
    const { data } = await axios('https://api.thecatapi.com/v1/breeds');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchBreeds };
