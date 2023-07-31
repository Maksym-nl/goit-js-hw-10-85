import axios from 'axios';

const API_KEY =
  'live_d9fet9JvTY7sUSpy1ezmELB3sSoHVWPmHXnghG0BadLXXdp6FU6npNHFrcuXU452';

async function fetchBreeds() {
  try {
    const { data } = await axios('https://api.thecatapi.com/v1/breeds');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchCatByBreed(breedId) {
  try {
    const { data } = await axios(
      `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export { fetchBreeds, fetchCatByBreed };
