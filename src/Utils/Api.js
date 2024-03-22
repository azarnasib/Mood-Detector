import axios from "axios";

const API_KEY="oBUjjGNAoDiKghHD0tnd4MftRyRNK3yb" ;
const API_URL= "https://api.apilayer.com/text_to_emotion";

export const analyzeTextEmotion=async (text) => {
    try {
        const response= await axios.post(API_URL, {text}, {
            headers: {
                'apikey': API_KEY,
                'Content-Type': 'application/json'

            }
        });
        return response.data;
    } catch (error) {
        console.error("Something went wrong", error);
        throw error;
    }
};