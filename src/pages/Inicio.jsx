import React from "react";
import Form from "../components/Form";

export default function Inicio() {
  return (
    <section id="inicio" className="flex items-center justify-evenly h-screen bg-purple-500 bg-opacity-20">
      <div className="flex-1 flex items-center justify-center px-8">
        <article className="flex-1 flex flex-col w-2/4">
          <div className="p-4">
            <p className="text-white font-serif">short</p>
            <h1 className="font-bold text-5xl text-white">Title</h1>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nostrum cum dolores cupiditate fugit laboriosam reprehenderit.
              Provident obcaecati, deleniti accusamus expedita a repellendus,
              illum error nemo, minima id inventore totam.
            </p>
          </div>
        </article>
      </div>
      <Form />
    </section>
  );
}
