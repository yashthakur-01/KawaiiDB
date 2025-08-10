import React from "react";

function MovieCard({id,title,image}) {
  return (
    <div id={id}
      className="relative flex flex-col items-center justify-end m-[15px] h-[17.5rem] w-[10.5rem]  bg-center bg-cover transition-transform hover:-translate-y-2 hover:scale-105 duration-200"
      
    >
      <img loading='lazy' src={image} alt="poster" className="absolute inset-0 w-full h-full object-fill rounded-[4px]" />
      <div className="absolute right-0 top-0  m-4  bg-black rounded-[5px]">
      {"\u{1F60D}"}
      </div>
      <div className="my-1 text-xl absolute text-center p-1 text-white w-full bg-[rgb(0,0,0,0.587)]">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
