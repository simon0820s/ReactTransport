import { CiBeaker1 } from "react-icons/ci";

export default function QuienesSomos() {
  return (
    <section
      id="quienes_somos"
      className="h-screen flex flex-col justify-start items-center"
    >
      <div className="flex flex-col justify-center bg-neutral-100">
        <div className="flex flex-col items-center mt-20">
          <h2 className="text-[#2f4a69] text-3xl">People are strange</h2>
          <h1 className="text-[#2f4a69] text-6xl">Who are</h1>
        </div>

        <div className="flex justify-evenly w-screen h-auto bg-opacity-50 py-10">
          <div className="flex flex-col items-center w-60 mt-10 px-8">
            <span className="w-20 h-20 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-20 h-20 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-6xl mt-2 ml-2" />
            </span>
            <h3 className="mt-4 text-2xl">Quality</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            </p>
          </div>

          <div className="flex flex-col items-center w-60 mt-10 px-8">
            <span className="w-20 h-20 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-20 h-20 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-6xl mt-2 ml-2" />
            </span>
            <h3 className="mt-4 text-2xl">Quality</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            </p>
          </div>

          <div className="flex flex-col items-center w-60 mt-10 px-8">
            <span className="w-20 h-20 border-4 border-[#10E698] absolute mr-8"></span>
            <span className="w-20 h-20 bg-[#0d1926] mt-4 z-10">
              <CiBeaker1 className="text-[#10E698] text-6xl mt-2 ml-2" />
            </span>
            <h3 className="mt-4 text-2xl">Quality</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
