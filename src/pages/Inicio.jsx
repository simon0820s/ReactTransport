import React from "react";
import Form from "../components/Form";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center h-screen bg-purple-500 bg-opacity-20"
    >
      <article className="flex-1 flex items-center justify-center flex-col w-20 ml-4">
        <div className="px-1 max-w-lg">
          <p className="text-[#10E698] text-lg font-md ml-1">short</p>
          <h1 className="font-bold text-7xl text-white">Title</h1>
          <h1 className="font-bold text-7xl text-white">Business</h1>
          <p className="text-white mt-4 ml-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          </p>
          <button className="flex-1 w-1/2 h-8 py-1 mt-4 rounded-sm font-medium bg-[#10e698] hover:bg-[#10e69870] hover:text-neutral-100 transition-all ease-in-out duration-300">
            Unete
          </button>
        </div>
      </article>
    </section>
  );
}
