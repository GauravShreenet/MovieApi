import axios from "axios";

const apiUrl = "https://www.omdbapi.com/"
const apiKey = "a182cb05" 

export const fetechMovie = async (url) => {
    // // axios.get(`${apiUrl}`).then(response => {
    // //     console.log(response);

    // })

    try {
        const response = await axios.get(`${apiUrl}?apikey=${apiKey}&t=${url}`);
        return response.data;
    }catch(error){
        console.log(error)
    }
}