import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1"

const response = await fetch(`${API}/products`);
const products = await response.json();

export { products }