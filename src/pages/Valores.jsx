import { RiBankFill } from "react-icons/ri";

export default function Valores() {
  return (
    <section
      id="valores"
      className="flex items-center justify-center h-screen bg-blue-500 bg-opacity-20"
    >
      <div className="bg-neutral-100 w-3/4 h-4/5 rounded-2xl">
        <div className="flex flex-col items-center gap-3 mt-8 px-2">
          <h1 className="text-2xl text-[#2f4a69] font-bold underline">
            Valores
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            fuga,orem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            fuga,orem ipsum dolor sit ametolor sit amet consectetur adipisicing
            elit. Nemo fuga,orem ipsum dolor sipsum dolor sit ametolor sit amet
            consectetur adipisicing elit. Nemo fuga,orem ipsum do
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            fuga
          </p>
          <RiBankFill className="text-4xl"/>
        </div>
      </div>
    </section>
  );
}
