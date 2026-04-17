import axios from "axios";

const getUnsplash = async (query, page, per_page=9) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
      },
    });
    const data = response.data;
    return data.results;
  } catch (error) {
    console.log("Error in fetching from axios, Unsplash", error);
  }
};

export default getUnsplash;
