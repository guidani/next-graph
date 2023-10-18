export const getHygraphPosts = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      // Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    };
    const requestBody = {
      query: `query DemoModels {
        demoModels {
          post {
            id
            slug
            title
            imagem {
              url
              id
            }
            content {
              text
            }
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
      await fetch(process.env.HYGRAPH_URL || "", options)
    ).json();
    // console.log("RESPONSE FROM FETCH REQUEST \n", response?.data?.demoModels);
    console.log(
      "RESPONSE FROM FETCH REQUEST \n",
      JSON.stringify(response?.data?.demoModels, null, 2)
    );
    return response?.data?.demoModels;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
    return err;
  }
};
