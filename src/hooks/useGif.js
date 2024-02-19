import React, {useEffect, useState} from "react";
import axios from "axios";

const API_KEY ='1xADsnrJGgPBdCFWGyTtDJy8wqRBrZEk';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag){
        setLoading(true)
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url); //returns promise
        // console.log(output)
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () =>{
        fetchData();
    },[]);
    
    return{
        gif, loading, fetchData
    };
}    
export default useGif;
