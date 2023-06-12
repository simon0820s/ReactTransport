import React from "react";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="h-screen text-gray-800 bg-neutral-100 bg-opacity-80"
    >
      <div className="flex flex-col items-center text-center justify-between py-20 px-4 gap-10">
        <div>
          <h1 className="text-4xl font-bold text-[#2f4a69]">Article</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          </p>
        </div>

        <div>
          <h1 className="text-4xl text-[#2f4a69]">Information</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            reprehenderit corporis nostrum tempora rem quam. A voluptas aut
            quibusdam, ipsa temporibus doloribus, magnam rem vitae perspiciatis,
            tenetur sit asperiores. Vero!
          </p>
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-r from-indigo-500 ... w-full"></div>
    </section>
  );
}
