import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    const slides = [
        {
      image: "https://imgs.search.brave.com/ksuI1n5fXLk4XfCVFDCiGLic3jfTMXsuYxrEbStuw_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzU5/LzA5LzNjNTkwOTZk/YWIyOWI3ZGRmNWEz/ZGYxMDBlM2IwMmVl/LmpwZw",
      title: "Spy X Family",
    },
    {
      image: "https://imgs.search.brave.com/HARk50B1kpQd46X97ETskJj4FEU-HuGK98vIC06misw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC82LzAv/Zi8yNTg3NS0xOTIw/eDEwODAtZGVza3Rv/cC0xMDgwcC1hdHRh/Y2stb24tdGl0YW4t/dHYtc2VyaWVzLXdh/bGxwYXBlci1waG90/by5qcGc",
      title: "Attack on Titan",
    },
    {
      image: "https://imgs.search.brave.com/BzO5_HVKsZ2AavlayxzmHqpIKypRsYv1MaGiKNMmIzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY0MDc4/ODEuanBn",
      title: "Demon Slayer",
    }
    ]
  return (
    <>
      <div>
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            showStatus={false}
            transitionTime={700}
          >
            {slides.map((item,index)=>(
                <div key={index} className='flex items-end justify-start mx-auto bg-center bg-cover h-[70vh] lg:w-[70vw] bg-no-repeat'
            style={{backgroundSize: 'contain',backgroundImage: `url(${item.image})`}}>
                <div className='pl-[30px] py-[10px] mb-[10px] text-3xl w-full text-white bg-[rgba(0,0,0,0.6)]'>
                    {item.title}
                </div>
            </div>
            ))}
          </Carousel>
      </div>
    </>
  );
}

export default Banner;
