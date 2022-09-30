import axios from "axios";

export default axios.create({
    baseURL: "https://6337677a5327df4c43d3ce1f.mockapi.io/",
    timeout: 1000,
});