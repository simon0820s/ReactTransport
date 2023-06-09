import React from "react";
import Form from "../components/Form";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="flex items-center h-screen bg-purple-500 bg-opacity-20"
    >
      <article className="flex-1 flex items-center justify-center flex-col w-20 ml-4">
        <div className="px-4 max-w-lg">
          <p className="text-[#10E698] text-lg font-serif">short</p>
          <h1 className="font-bold text-5xl text-white">Title</h1>
          <h1 className="font-bold text-5xl text-white">Business</h1>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nostrum cum dolores cupiditate fugit laboriosam reprehenderit.
            Provident obcaecati, deleniti accusamus expedita a repellendus,
            illum error nemo, minima id inventore totam.
          </p>
        </div>
      </article>
      <Form />
    </section>
  );
}
