// import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from '../lib/constants';
export const getCharacters = async () => {
  try {
    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query getCharacters {
        characters(filter: {name: "rick"}){
          info {
            count
          },
          results{
            name
          }
        }
      }`,
    };

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };
    const response = await (
      await fetch("https://rickandmortyapi.com/graphql", options)
    ).json();
    console.log("RESPONSE FROM FETCH REQUEST \n", response?.data);
    return response?.data?.characters;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
    return err;
  }
};
