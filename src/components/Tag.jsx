import React, { useState } from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";

const Tag=() =>{  

  const [tag, setTag] = useState('')
  const {gif, loading, fetchData} = useGif(tag);

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function fetchData(){
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
  
  // function clickHandler(){
  //   fetchData();  
  // }

  return (

    <div className="w-11/12   bg-blue-500 items-center rounded-lg border border-black mt-10 
    flex mx-auto flex-col mb-10">
      <h1 className="text-2xl mt-[15px] underline mx-auto uppercase font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt={tag}/>)
      }
      <input onChange={(event) => setTag(event.target.value)} value={tag}
        className="w-10/12 text-lg py-2 text-center rounded-lg mb-[4px]"/>
      
      <button onClick={() => fetchData(tag)}
      className="bg-green-200 w-10/12 mx-auto p-2 uppercase font-semibold rounded-lg">
        Generate
      </button>
      
    </div>
  );
}


export default Tag;
