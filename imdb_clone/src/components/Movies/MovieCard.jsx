import React from "react";

function MovieCard() {
  return (
    <div
      className="relative flex flex-col items-center justify-end m-[15px] h-[18rem] w-[9rem] rounded-[15px] bg-center bg-cover transition-transform hover:-translate-y-2 hover:scale-105 duration-200"
      style={{
        backgroundSize: "contain",
        backgroundImage:
          "url(https://imgs.search.brave.com/HARk50B1kpQd46X97ETskJj4FEU-HuGK98vIC06misw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC82LzAv/Zi8yNTg3NS0xOTIw/eDEwODAtZGVza3Rv/cC0xMDgwcC1hdHRh/Y2stb24tdGl0YW4t/dHYtc2VyaWVzLXdh/bGxwYXBlci1waG90/by5qcGc)",
      }}
    >
      <div className="absolute right-0 top-0  m-4  bg-black rounded-[5px]">
      {"\u{1F60D}"}
      </div>
      <div className="my-1 text-xl text-center p-1 text-white w-full bg-[rgb(0,0,0,0.587)]">
        card
      </div>
    </div>
  );
}

export default MovieCard;
