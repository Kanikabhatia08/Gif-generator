import React from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY ='1xADsnrJGgPBdCFWGyTtDJy8wqRBrZEk';


const Random=() =>{  

  // const [gif, setGif] = useState();
  // const [loading, setLoading] = useState(false);

  // async function fetchData(){
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url); //returns promise
  //   // console.log(output)
  //   const imageSource = data.data.images.downsized_large.url;
  //   // console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect( () =>{
  //   fetchData();
  // },[]);

  const {gif, loading, fetchData} = useGif();
  
  return (

  <div className="w-11/12  bg-green-500 items-center rounded-lg border border-black mt-10 
  flex mx-auto flex-col gap-y-5">
    <h1 className="text-2xl mt-[15px] underline mx-auto uppercase font-bold">Random Gif</h1>
    {
      loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
    }
    
    <button onClick={() => fetchData()}
    className="bg-green-200 w-10/12 mx-auto p-2 uppercase font-semibold rounded-lg">
      Generate
    </button>
    
  </div>);
}


export default Random;
