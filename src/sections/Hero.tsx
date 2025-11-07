import React from "react";
import { hero } from "../constants";
import { MovingTriangles } from "../components/triangles";
import teddy from "../assets/teddy.png";

const Hero = () => {
  return (
    <section className="relative bg-purple-200 h-screen overflow-clip">
      <div className="container mx-auto h-full flex items-center relative">
        <div className="md:w-1/2 flex flex-col gap-6 z-10 items-center md:items-baseline">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-7xl text-center md:text-left">
              {hero.name}
            </h1>
            <h2 className="text-3xl text-gray-700 text-center md:text-left">
              {hero.job}
            </h2>
          </div>
          <p className="text-center md:text-left">{hero.about}</p>
          <button className="bg-white w-fit px-4 py-2 rounded-lg shadow-md cursor-pointer">
            Read more
          </button>
        </div>
<img
  src={teddy}
  alt="Teddy"
  className="absolute w-auto h-[85vh] bottom-0 md:z-10 md:-right-44 lg:right-20 hidden md:block [mask-image:linear-gradient(to_top,transparent_0%,black_5%)]"
/>

      </div>

      <div className="absolute top-10 left-0 w-full rotate-180 opacity-30">
        <MovingTriangles />
      </div>
      <div className="absolute top-0 bg-zinc-500 opacity-30 h-10 w-full"></div>
      <div className="absolute bottom-10 left-0 w-full opacity-30">
        <MovingTriangles />
      </div>
      <div className="absolute bottom-0 bg-zinc-500 opacity-30 h-10 w-full"></div>
    </section>
  );
};

export default Hero;
