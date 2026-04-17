import axios from "axios";

const VITE_KLIPY_GIF_API_KEY = import.meta.env.VITE_KLIPY_GIF_API_KEY;

const getGif = async (query, page, per_page=9) => {
  try {
    const response = await axios.get(`https://api.klipy.com/api/v1/${VITE_KLIPY_GIF_API_KEY}/gifs/search?page=${page}&per_page=${per_page}&q=${query}&customer_id=satyansh`);
    const results = response.data;
    return results.data;
  } catch (error) {
    console.log("Error in fetching from axios, Gif Klipy", error);
  }
};

export default getGif;