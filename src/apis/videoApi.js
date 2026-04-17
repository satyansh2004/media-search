import { createClient } from "pexels";

const VITE_PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const client = createClient(`${VITE_PEXELS_API_KEY}`);
const query = "India"


export default client