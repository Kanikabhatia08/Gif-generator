import React from "react";
import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return (
    
    <div className="w-full h-full flex flex-col background">
      <h1 className="uppercase text-3xl font-bold w-11/12 text-center mt-[40px] mx-auto bg-white p-3 rounded-md">Random Gifs</h1>
      <div className="flex flex-col w-full items-center gap-y-20">
        <Random />
        <Tag />
      </div>
    </div>
    );
}
