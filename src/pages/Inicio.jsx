import React from "react";
import Form  from "../components/Form";

export default function Inicio() {
  return (
    <section id="inicio" className="h-screen flex justify-center items-center ">
      <div className="flex-1 flex items-center justify-center">
        <article className="flex flex-col bg-yellow-500 w-2/4">
          <div className="p-4">
            <p className="text-white">short</p>
            <h1 className="font-bold text-5xl text-white">Title</h1>
            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum cum dolores cupiditate fugit laboriosam reprehenderit. Provident obcaecati, deleniti accusamus expedita a repellendus, illum error nemo, minima id inventore totam.</p>
          </div>
        </article>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Form/>
      </div>
    </section>
  );
}
