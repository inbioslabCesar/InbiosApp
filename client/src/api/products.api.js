import axios from "axios";

export const getProductsRequest = async () => 
    await axios.get("http://localhost:9000/products")


export const createProductRequest = async (product) =>
  await axios.post("http://localhost:9000/products", product);
